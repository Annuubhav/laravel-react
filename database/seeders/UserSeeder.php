<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => Str::random('Anubhav'),
            'email' => 'anubhav@gupta.com',
            'password' => Hash::make('123456'),
        ]);
    }
}
