<?php

namespace Database\Seeders;

use App\Models\User;
use Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Admin',
                'email' => 'shop.admin@yopmail.com',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'User',
                'email' => 'shop.user@yopmail.com',
                'password' => Hash::make('password'),
            ],

        ];

        foreach ($users as $user) {
            User::create($user);
        }


        $adminRole = Role::where('name', 'admin')->first();
        $userRole = Role::where('name', 'user')->first();

        $admin = User::where('email', 'shop.admin@yopmail.com')->first();
        $admin->assignRole($adminRole);
        $user = User::where('email', 'shop.user@yopmail.com')->first();
        $user->assignRole($userRole);
    }
}
