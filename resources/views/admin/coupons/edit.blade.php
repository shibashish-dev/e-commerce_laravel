@extends('layouts.admin')

@section('content')
    <div class="container mx-auto p-4">
        <h2 class="text-2xl font-bold mb-4">Edit Coupon</h2>
        <form action="{{ route('coupons.update', $coupon->id) }}" method="POST">
            @csrf
            @method('PUT')
            <div class="mb-4">
                <label class="block text-gray-700">Coupon Code</label>
                <input type="text" name="code" class="form-input mt-1 block w-full" value="{{  $coupon->code }}" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Discount</label>
                <input type="number" name="value" class="form-input mt-1 block w-full" value="{{ $coupon->value }}" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Limit</label>
                <input type="number" name="limit" class="form-input mt-1 block w-full" value="{{ $coupon->limit }}" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Type</label>
                <select name="type" class="form-select mt-1 block w-full" required>
                    <option value="percentage" {{  $coupon->type == 'percentage' ? 'selected' : '' }}>Percentage</option>
                    <option value="fixed" {{  $coupon->type == 'fixed' ? 'selected' : '' }}>Fixed</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Expires At</label>
                <input type="date" name="expires_at" class="form-input mt-1 block w-full" value="{{ optional($coupon->expires_at)->format('Y-m-d') }}" required>
            </div>
            <button type="submit" class="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update</button>
        </form>
    </div>
@endsection
