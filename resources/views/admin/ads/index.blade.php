@extends('layouts.admin')
@section('content')
    <div class="container mx-auto px-4 py-8">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold">Advertisements</h1>
            @if (count($ads->where('status', true)) < 1)
                <a href="{{ route('ads.create') }}"
                    class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded"><i
                        class="fa-solid fa-plus"></i> Create</a>
            @endif
        </div>
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full bg-white">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="py-3 px-4 uppercase font-semibold text-sm">Image</th>
                        <th class="py-3 px-4 uppercase font-semibold text-sm">ID</th>
                        <th class="py-3 px-4 uppercase font-semibold text-sm">Title</th>
                        <th class="py-3 px-4 uppercase font-semibold text-sm">Status</th>
                        <th class="py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody class="text-gray-700 text-center">
                    @foreach ($ads as $ad)
                        <tr class="border-b">
                            <td class="py-3 px-4">
                                <img src="{{ $ad->image }}" alt="{{ $ad->title }}" class="rounded-full object-cover h-12 w-12 mx-auto transform transition-transform duration-300 hover:scale-150 hover:cursor-pointer">
                            </td>
                            <td class="py-3 px-4">{{ $ad->id }}</td>
                            <td class="py-3 px-4">{{ $ad->title }}</td>
                            <td class="py-3 px-4">
                                @if ($ad->status)
                                    <span class="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">Active</span>
                                @else
                                    <span class="bg-red-200 text-red-800 py-1 px-3 rounded-full text-xs">Inactive</span>
                                @endif
                            </td>
                            <td class="py-3 px-4">
                                <div class="flex items-center justify-center gap-3">
                                    <a href="{{ route('ads.edit', $ad->id) }}"
                                        class="text-blue-500 hover:text-blue-700">Edit</a>
                                    <form action="{{ route('ads.destroy', $ad->id) }}" method="POST" class="inline-block">
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
