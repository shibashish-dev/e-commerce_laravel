@extends('layouts.admin')

@section('content')
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-bold my-4">Create New Category</h1>
        <form action="{{ route('category.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="mb-4">
                <label for="name" class="block text-gray-700">Category Name</label>
                <input type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="name"
                    name="name" placeholder="Enter category name" value="{{ old('name') }}" required>
            </div>
            <div class="mb-4">
                <label for="description" class="block text-gray-700">Description</label>
                <textarea class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="description" name="description"
                    rows="3" placeholder="Enter category description">{{ old('description') }}</textarea>
            </div>
            <div class="mb-4">
                <label for="slug" class="block text-gray-700">Slug</label>
                <input type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="slug"
                    name="slug" placeholder="Enter category slug" value="{{ old('slug') }}" required>
            </div>
            <div class="mb-4">
                <label for="image" class="block text-gray-700">Image</label>
                <div class="mt-2 flex items-center justify-center w-full">
                    <label for="image"
                        class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 16V4m0 0L4 7m3-3l3 3M3 16a4 4 0 004 4h10a4 4 0 004-4M16 16V4m0 0l3 3m-3-3l-3 3">
                                </path>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag
                                and drop</p>
                            <p class="text-xs text-gray-500">PNG, JPG, JPEG (Max: 2MB)</p>
                        </div>
                        <input id="image" type="file" class="hidden" name="image" accept="image/*"
                            onchange="previewImage(event)" required>
                    </label>
                </div>
                <div class="mt-4 flex justify-center">
                    <img id="preview" class="hidden max-h-40 rounded-md shadow-md" />
                </div>
            </div>
            <div class="mb-4">
                <label for="status" class="block text-gray-700">Status</label>
                <select class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="status" name="status">
                    <option value="1" {{ old('status') == '1' ? 'selected' : '' }}>Active</option>
                    <option value="0" {{ old('status') == '0' ? 'selected' : '' }}>Inactive</option>
                </select>
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create
                Category</button>
        </form>
    </div>
@endsection

@push('scripts')
    <script>
        function previewImage(event) {
            const file = event.target.files[0];
            const preview = document.getElementById('preview');
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.classList.remove('hidden');
                };
                reader.readAsDataURL(file);
        }
        }

        document.addEventListener("DOMContentLoaded", function() {
            @if (session('success'))
                Swal.fire({
                    title: "Success!",
                    text: "{{ session('success') }}",
                    icon: "success",
                    confirmButtonText: "OK"
                });
            @elseif (session('error'))
                Swal.fire({
                    title: "Error!",
                    text: "{{ session('error') }}",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            @endif
        })
    </script>
@endpush
