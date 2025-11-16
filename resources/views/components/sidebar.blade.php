<div class="p-2 bg-blue-950 w-full md:w-60 flex flex-col md:flex" id="sideNav">
    <hr>
    <nav>
        <a class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="{{ route('admin.index') }}">
            <i class="fa-solid fa-gauge"></i> Dashboard
        </a>
        <a class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="{{ route('article.index') }}">
            <i class="fas fa-box-open"></i> Articles
        </a>
        <a class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="{{ route('category.index') }}">
            <i class="fas fa-box-open"></i> Categories
        </a>
        <a class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="{{ route('coupons.index') }}">
            <i class="fas fa-box-open"></i> Coupons
        </a>

        <div>
            <button onclick="document.getElementById('homePageSettings').classList.toggle('hidden')"
                class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white w-full text-left">
                <i class="fas fa-caret-down mr-2"></i> Home Page Settings
            </button>
            <div id="homePageSettings" class="ml-4 hidden transition-all duration-300 ease-in-out">
                <a class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                    href="{{ route('ads.index') }}">
                    <i class="fas fa-box-open"></i> Advertisement
                </a>
                <a class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                    href="{{ route('features.index') }}">
                    <i class="fas fa-box-open"></i> Features
                </a>
            </div>

        </div>

        <a class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="{{ route('product.index') }}">
            <i class="fas fa-box-open"></i> Products
        </a>

        <a class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="{{ route('users.index') }}">
            <i class="fas fa-users mr-2"></i>Users
        </a>
        <a class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="#">
            <i class="fa-solid fa-address-book"></i> Contacts
        </a>
        <a class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="#">
            <i class="fas fa-exchange-alt mr-2"></i>Orders
        </a>
    </nav>

    <!-- Ítem de Cerrar Sesión -->
    <form method="POST" action="{{ route('logout') }}" class="mt-auto">
        @csrf
        <button type="submit"
            class="block text-white py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white w-full text-left">
            <i class="fas fa-sign-out-alt mr-2"></i>Logout
        </button>
    </form>

    <!-- Señalador de ubicación -->
    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

    <!-- Copyright al final de la navegación lateral -->
    <p class="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Copyright Shop {{ \Carbon\Carbon::now()->year }}</p>

</div>
