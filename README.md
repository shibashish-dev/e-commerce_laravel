# Shop (Laravel)

This repository contains a Laravel-based online shop application. It includes an admin area, product management, and a coupon system integrated with michael-rubel/laravel-couponables.

## Quick overview

- PHP/Laravel web app with Inertia + React pages for the storefront.
- Coupon functionality uses the `michael-rubel/laravel-couponables` package. Admin can create coupons; users can redeem them via API.

## Requirements

- PHP 8.x
- Composer
- Node.js 16+ and npm or yarn
- A supported database (MySQL, PostgreSQL, SQLite)

## Local setup

1. Clone the repo and install PHP dependencies:

```bash
composer install
```

2. Copy environment and set values:

```bash
cp .env.example .env
php artisan key:generate
```

3. Install frontend dependencies and build assets:

```bash
npm install
# or: yarn
npm run build
# or for local dev: npm run dev
```

4. Run migrations and seeders (if any):

```bash
php artisan migrate --seed
```

5. Start the local dev server:

```bash
php artisan serve
```

## Coupon package (integration)

This project uses michael-rubel/laravel-couponables. To set up or reconfigure the package:

```bash
composer require michael-rubel/laravel-couponables
php artisan vendor:publish --provider="MichaelRubel\Couponables\CouponableServiceProvider" --tag="config"
php artisan migrate
```

Notes:
- The included `Coupon` model in the package is used (see `app/Http/Controllers/CouponController.php`). The project exposes a `reedem` endpoint on the `CouponController` which accepts POST requests with `code` and `user_id` and returns JSON. The controller's method name is `reedem` (note the spelling) — use that route when wiring your frontend.
- Admin views for creating/editing coupons are in `resources/views/admin/coupons`.

Example JSON request to redeem a coupon:

```json
POST /coupons/reedem
{
	"code": "DISCOUNT10",
	"user_id": 1
}
```

## Developer notes

- Frontend cart page is at `resources/js/Pages/Shop/Cart/Cart.jsx`. You can call a coupon endpoint (e.g. `/apply-coupon` or `/coupons/reedem`) from the React component to verify and apply discounts.
- The `app/Models/Coupon.php` should extend `MichaelRubel\Couponables\Models\Coupon` if you need to customize fillable attributes or date casting.

## Tests

Run tests with:

```bash
./vendor/bin/pest
```

or

```bash
phpunit
```

## License

This project is open-source. See the repository license for details.
