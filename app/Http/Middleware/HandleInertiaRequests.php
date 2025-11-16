<?php

namespace App\Http\Middleware;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default. 6xrT2Agi2SAkw
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        $categories = Category::where('status', true)->with('products')->get();
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user()?->load(['info','roles']),
            ],

            'categories' => $categories,
        ];
    }
}
