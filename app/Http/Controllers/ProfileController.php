<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use App\Models\UserInformation;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return inertia('Profile/Profile', [
            'user' => $user
        ]);
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();
        $validated = $request->validated();

        // Update User's name if provided
        $user->update([
            'name' => $validated['name'] ?? $user->name,
            'email' => $validated['email'] ?? $user->email,
        ]);


        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        if ($request->hasFile('image')) {
            $user->addMediaFromRequest('profile')
                ->toMediaCollection('profile');
        }

        // Update or create user information
        $user->info()->updateOrCreate(
            ['user_id' => $user->id],
            [
                'date_of_birth' => $validated['date_of_birth'] ?? $user->info->date_of_birth,
                'gender' => $validated['gender'] ?? $user->info->gender,
                'phone_number' => $validated['phone_number'] ?? $user->info->phone_number,
                'profile' => $validated['image'] ?? $user->info->profile,
            ]
        );

        $user->save();

        return Redirect::route('profile.update')->with('status', 'Profile updated!');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }


    public function upload(Request $request, $user_id)
    {

        try {
            $user = User::findOrFail($user_id);

            $info = UserInformation::where('user_id', $user_id)->firstOrFail();

            // Check if any media related to the user, then delete it
            if ($info->hasMedia('profile')) {
                $info->clearMediaCollection('profile');
            }

            // Store new media
            $image = $info->addMedia($request->file('profile'))->toMediaCollection('profile');

            $profile = $image->getUrl();
            $info->updateOrCreate(
                ['user_id' => $user->id],
                [
                    'profile' => $profile,
                ]
            );

            return response()->json(['message' => 'Profile uploaded successfully!']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while uploading the profile.'], 500);
        }
    }

    public function address(Request $request, $user_id)
    {

        $request->validate([
            'address' => 'required|string',
            'country' => 'required|string',
            'state' => 'required|string',
            'city' => 'required|string',
            'zip' => 'required|string',
        ]);

        $address = json_encode($request->all());

        $user = User::findOrFail($user_id);

        $info = UserInformation::updateOrCreate(
            ['user_id' => $user->id],
            [
                'address' => $address,
            ]
        );

        return Redirect::route('profile.update')->with('status', 'Address updated successfully!');
    }

}
