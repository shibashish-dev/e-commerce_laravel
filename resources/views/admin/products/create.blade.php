@extends('layouts.admin')

@section('content')
    <div class="container mx-auto px-4">

        <h1 class="text-2xl font-bold my-4">Create Product</h1>
        <form action="{{ route('product.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="mb-4">
                <label for="name" class="block text-gray-700">Product Title</label>
                <input type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="name"
                    name="title" value="{{ old('title') }}">
                @error('title')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>

            <div class="mb-4">
                <label for="description" class="block text-gray-700">Description</label>
                <textarea class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="description" name="description"
                    rows="3">{{ old('description') }}</textarea>
                @error('description')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>

            <div class="mb-4">
                <label for="price" class="block text-gray-700">Price</label>
                <input type="number" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="price"
                    name="price" step="0.01" value="{{ old('price') }}">
                @error('price')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>



            <div class="mb-4">
                <label for="image" class="block text-gray-700">Product Image</label>
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
                            onchange="previewImage(event)">
                    </label>
                </div>
                @error('image')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
                <div class="mt-4 flex justify-center">
                    <img id="preview" class="hidden max-h-40 rounded-md shadow-md" />
                </div>
            </div>

            <div class="mb-4">
                <label for="gallery" class="block text-gray-700">Product Gallery</label>
                <div class="mt-2 flex items-center justify-center w-full">
                    <label for="gallery"
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
                            <p class="text-xs text-gray-500">PNG, JPG, JPEG (Max: 2MB each)</p>
                        </div>
                        <input id="gallery" type="file" class="hidden" name="gallery[]" accept="image/*" multiple
                            onchange="previewMultipleImages(event)">
                    </label>
                </div>
                @error('gallery')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
                <div class="mt-4 flex justify-center">
                    <div class="mt-4 flex justify-center" id="preview-multiple"></div>
                </div>
            </div>
            <div class="mb-4">
                <label for="category" class="block text-gray-700">Category</label>
                <select class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="category" name="category">
                    <option value="">Select a category</option>
                    @foreach ($categories as $category)
                        <option value="{{ $category->id }}" {{ old('category') == $category->id ? 'selected' : '' }}>
                            {{ $category->name }}
                        </option>
                    @endforeach
                </select>
                @error('category')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>

            <div class="mb-4">
                <label for="stock" class="block text-gray-700">Stock</label>
                <input type="number" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="stock"
                    name="stock" value="{{ old('stock') }}">
                @error('stock')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>

            <div class="mb-4">
                <label for="sku" class="block text-gray-700">SKU</label>
                <input type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="sku"
                    name="sku" value="{{ old('sku') }}">
                @error('sku')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>

            <div class="mb-4">
                <label for="slug" class="block text-gray-700">Slug</label>
                <input type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="slug"
                    name="slug" value="{{ old('slug') }}">
                @error('slug')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>

            <div class="mb-4">
                <label for="height" class="block text-gray-700">Height</label>
                <input type="number" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="height"
                    name="height" step="0.01" value="{{ old('height') }}">
                @error('height')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>

            <div class="mb-4">
                <label for="width" class="block text-gray-700">Width</label>
                <input type="number" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="width"
                    name="width" step="0.01" value="{{ old('width') }}">
                @error('width')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>

            <div class="mb-4">
                <label for="length" class="block text-gray-700">Length</label>
                <input type="number" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="length"
                    name="length" step="0.01" value="{{ old('length') }}">
                @error('length')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>

            <div class="mb-4">
                <label for="weight" class="block text-gray-700">Weight</label>
                <input type="number" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="weight"
                    name="weight" step="0.01" value="{{ old('weight') }}">
                @error('weight')
                    <p class="text-red-500 text-sm">{{ $message }}</p>
                @enderror
            </div>

            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create Product
            </button>
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

        function previewMultipleImages(event) {
            const files = event.target.files;
            const previewContainer = document.getElementById('preview-multiple');

            // Clear previous previews
            previewContainer.innerHTML = '';

            if (files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const reader = new FileReader();
                    const imgElement = document.createElement("img");

                    imgElement.classList.add("max-h-40", "rounded-md", "shadow-md", "m-2");

                    reader.onload = function(e) {
                        imgElement.src = e.target.result;
                        previewContainer.appendChild(imgElement);
                    };

                    reader.readAsDataURL(file);
                }
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
