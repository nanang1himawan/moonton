<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name'=> 'Admin',
            'email' => 'yahoo@gmail.com',
            'password' => bcrypt('21436587'),
        ]);
        $admin->assignRole('admin');
    }
}
