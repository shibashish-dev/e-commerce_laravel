<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    {{-- <link rel="stylesheet" href="{{ asset('css/app.css') }}"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('css/admin.css') }}"> --}}
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/bootstrap.js'])
    <link rel="stylesheet" href="https://cdn.ckeditor.com/ckeditor5/44.3.0/ckeditor5.css" crossorigin>
    @stack('styles')
</head>

<body class="bg-gray-100 text-gray-900">
    <div class="flex flex-col h-screen bg-gray-100">

        <!-- Navbar -->
        <x-Navbar></x-Navbar>

        <!-- Contenido principal -->
        <div class="flex-1 flex flex-wrap">
            <!-- Sidebar -->
            <x-Sidebar></x-Sidebar>

            <!-- Área de contenido principal -->
            <div class="flex-1 p-4 w-full md:w-1/2">
                @yield('content')
            </div>
        </div>
    </div>
    </div>
    <script src="https://cdn.ckeditor.com/ckeditor5/44.3.0/ckeditor5.umd.js" crossorigin></script>
    @stack('scripts')
</body>

</html>
