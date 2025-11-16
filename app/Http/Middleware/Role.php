<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Role
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        // if (!Auth::check()) {
        //     abort(403, 'Unauthorized');
        // }

        // Check if user has any of the provided roles
        if (!Auth::user()->hasAnyRole($roles)) {
            abort(403, 'Unauthorized');
        }

        return $next($request);
    }
}
