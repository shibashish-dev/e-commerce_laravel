@extends('layouts.admin')

@section('content')
    <div class="container mx-auto mt-5">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-semibold">Coupons</h2>
            <a href="{{ route('coupons.create') }}" class="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Coupon</a>
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="py-2 px-4 border-b text-left">Code</th>
                        <th class="py-2 px-4 border-b text-left">Discount</th>
                        <th class="py-2 px-4 border-b text-left">Type</th>
                        <th class="py-2 px-4 border-b text-left">Expires At</th>
                        <th class="py-2 px-4 border-b text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($coupons as $coupon)
                        <tr class="hover:bg-gray-100">
                            <td class="py-2 px-4 border-b text-left">{{ $coupon->code }}</td>
                            <td class="py-2 px-4 border-b text-left">{{ $coupon->value }} {{ $coupon->type == 'percentage' ? '%' : 'INR' }}</td>
                            <td class="py-2 px-4 border-b text-left">{{ ucfirst($coupon->type) }}</td>
                            <td class="py-2 px-4 border-b text-left">{{ Carbon\Carbon::parse($coupon->expires_at)->format('d M Y') }}</td>
                            <td class="py-2 px-4 border-b text-left">
                                <a href="{{ route('coupons.edit', $coupon->id) }}" class="btn btn-warning btn-sm bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">Edit</a>
                                <form action="{{ route('coupons.destroy', $coupon->id) }}" method="POST" class="inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-sm bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onclick="return confirm('Delete this coupon?')">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
