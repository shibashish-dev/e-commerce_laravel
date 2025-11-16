@extends('layouts.admin')
@section('content')
    <div class="container mx-auto px-4 py-8">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold mb-4">Categories</h1>
            <a href="{{ route('category.create') }}"
                class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-2 rounded"><i
                    class="fa-solid fa-plus"></i> Create</a>
        </div>
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full bg-white">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="w-1/3 py-3 px-4 uppercase font-semibold text-sm">ID</th>
                        <th class="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Name</th>
                        <th class="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody class="text-gray-700 text-center">
                    @foreach ($categories as $category)
                        <tr>
                            <td class="w-1/3 py-3 px-4">{{ $category->id }}</td>
                            <td class="w-1/3 py-3 px-4">{{ $category->name }}</td>
                            <td class="w-1/3 py-3 px-4">
                                <div class="flex items-center justify-center gap-3">

                                    <a href="{{ route('category.edit', $category->id) }}"
                                        class="text-blue-500 hover:text-blue-700">Edit</a>
                                    <form action="{{ route('category.destroy', $category->id) }}" method="POST"
                                        class="inline-block">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="text-red-500 hover:text-red-700 ml-2">Delete</button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
