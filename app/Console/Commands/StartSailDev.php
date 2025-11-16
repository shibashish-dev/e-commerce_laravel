<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class StartSailDev extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sail:dev';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Start Laravel Sail and run npm run dev inside the container';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Starting Sail...');
        shell_exec('./vendor/bin/sail up -d');

        $this->info('Running npm run dev inside the container...');
        shell_exec('./vendor/bin/sail exec laravel.test npm run dev');

        $this->info('Sail and npm run dev started successfully.');
    }
}
