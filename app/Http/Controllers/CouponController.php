<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use MichaelRubel\Couponables\Models\Coupon;

class CouponController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $coupons = Coupon::all();
        return view('admin.coupons.index', compact('coupons'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.coupons.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|unique:coupons',
            'value' => 'required|numeric',
            'type' => 'required|in:percentage,fixed',
            'expires_at' => 'required|date|after:valid_from',
            'limit' => 'nullable|numeric',
        ]);

        Coupon::create($request->all());

        return redirect()->route('coupons.index')->with('success', 'Coupon created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Coupon $coupon)
    {
        return view('admin.coupons.edit', compact('coupon'));
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Coupon $coupon)
    {
        $request->validate([
            'code' => 'required|unique:coupons,code,' . $coupon->id,
            'value' => 'required|numeric',
            'type' => 'required|in:percentage,fixed',
            'expires_at' => 'required|date|after:valid_from',
            'limit' => 'nullable|numeric',
        ]);

        $coupon->update($request->all());

        return redirect()->route('coupons.index')->with('success', 'Coupon updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */

    public function destroy(Coupon $coupon)
    {
        $coupon->delete();

        return redirect()->route('coupons.index')->with('success', 'Coupon deleted successfully.');
    }


    public function reedem(Request $request)
    {
        try {
            $request->validate([
                'code' => 'required',
                'user_id' => 'required|exists:users,id'
            ]);

            $user = User::find($request->user_id);
            if (!$user) {
                return response()->json([
                    'success' => false,
                    'message' => 'User not found.'
                ], 404);
            }

            $verify = $user->verifyCoupon($request->code);

            if (!$verify) {
                return response()->json([
                    'success' => false,
                    'message' => 'Coupon code is not valid.'
                ], 400);
            }

            $alreadyRedeemed = $user->isCouponAlreadyUsed($request->code);

            if ($alreadyRedeemed) {
                return response()->json([
                    'success' => false,
                    'message' => 'Coupon code is already used.'
                ], 400);
            }

            $redeem = $user->redeemCoupon($request->code);

            if ($redeem) {
                return response()->json([
                    'success' => true,
                    'message' => 'Coupon code redeemed successfully.',
                    'data' => $redeem
                ], 200);
            }

            return response()->json([
                'success' => false,
                'message' => 'Coupon code is invalid.'
            ], 400);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage()
            ], 500);
        }
    }

}
