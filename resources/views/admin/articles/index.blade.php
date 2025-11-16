@extends('layouts.admin')

@section('content')
    <div class="container mx-auto p-4">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold mb-4">Articles</h1>
            <a href="{{ route('article.create') }}" class="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</a>
        </div>

        <table class="table-auto w-full mt-4">
            <thead>
                <tr class="bg-gray-200">
                    <th class="px-4 py-2">ID</th>
                    <th class="px-4 py-2">Title</th>
                    <th class="px-4 py-2">Author</th>
                    <th class="px-4 py-2">Created At</th>
                    <th class="px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($articles as $article)
                    <tr class="bg-white border-b">
                        <td class="px-4 py-2">{{ $article->id }}</td>
                        <td class="px-4 py-2">{{ $article->title }}</td>
                        <td class="px-4 py-2">{{ $article->user->name }}</td>
                        <td class="px-4 py-2">{{ $article->created_at }}</td>
                        <td class="px-4 py-2">
                            <a href="{{ route('article.edit', $article->id) }}" class="btn btn-warning bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Edit</a>
                            <form action="{{ route('article.destroy', $article->id) }}" method="POST" style="display: inline;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
