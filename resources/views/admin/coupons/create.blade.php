@extends('layouts.admin')

@section('content')
    <div class="container mx-auto p-4">
        <h2 class="text-2xl font-bold mb-4">Create Coupon</h2>
        <form action="{{ route('coupons.store') }}" method="POST">
            @csrf
            <div class="mb-4">
                <label class="block text-gray-700">Coupon Code</label>
                <input type="text" name="code" class="form-input mt-1 block w-full" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Discount</label>
                <input type="number" name="value" class="form-input mt-1 block w-full" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Limit</label>
                <input type="number" name="limit" class="form-input mt-1 block w-full" srequired>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Discount Type</label>
                <select name="type" class="form-select mt-1 block w-full" required>
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed</option>
                </select>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700">Valid To</label>
                <input type="date" name="expires_at" class="form-input mt-1 block w-full" required>
            </div>
            <button type="submit"
                class="bg-green-500 border hover:bg-green-700 text-black font-bold py-2 px-4 rounded">Save</button>
        </form>
    </div>
@endsection
