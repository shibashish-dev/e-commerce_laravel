<div class="bg-blue-950 text-white shadow w-full p-2 flex items-center justify-between">
    <div class="flex items-center justify-between w-80">
        <div class="flex items-center"> <!-- Mostrado en todos los dispositivos -->
            {{-- <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" class="w-28 h-18 mr-2"> --}}
            <h2 class="font-bold text-xl">{{ env('APP_NAME') }}</h2>
        </div>
        <div class="md:hidden flex items-center"> <!-- Se muestra solo en dispositivos pequeños -->
            <button id="menuBtn">
                <i class="fas fa-bars text-lg"></i> <!-- Ícono de menú -->
            </button>
        </div>
    </div>

    <!-- Ícono de Notificación y Perfil -->
    <div class="space-x-5 w-20 flex items-end justify-end mx-2" >
        <a href="{{ route('home') }}" target="_blank"> <i class="fa-solid fa-shop"></i> </a>
        <button>
            <i class="fas fa-bell text-lg"></i>
        </button>
        <!-- Botón de Perfil -->
        <button>
            <i class="fas fa-user  text-lg"></i>
        </button>
    </div>
</div>
