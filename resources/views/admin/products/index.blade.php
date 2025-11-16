@extends('layouts.admin')

@section('content')
    <div class="container mx-auto px-4 my-3">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold mb-4">Products</h1>
            <a href="{{ route('product.create') }}" class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-2 rounded"><i class="fa-solid fa-plus"></i> Create</a>
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr class="bg-gray-100 border-b">
                        <th class="py-2 px-4 text-left">ID</th>
                        <th class="py-2 px-4 text-left">Name</th>
                        <th class="py-2 px-4 text-left">Price</th>
                        <th class="py-2 px-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($products as $product)
                        <tr class="border-b hover:bg-gray-50">
                            <td class="py-2 px-4">{{ $product->id }}</td>
                            <td class="py-2 px-4">{{ $product->title }}</td>
                            <td class="py-2 px-4">{{ $product->price }}</td>
                            <td class="py-2 px-4">
                                <a href="{{ route('product.edit', $product->id) }}" class="text-blue-500 hover:text-blue-700">Edit</a>
                                <form action="{{ route('product.destroy', $product->id) }}" method="POST" class="inline-block">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="text-red-500 hover:text-red-700 ml-2">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
