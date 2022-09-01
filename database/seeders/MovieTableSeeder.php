<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Sambo Redemption',
                'slug' => 'the-sambo-redemption',
                'category'=> 'Drama',
                'video_url'=> 'https://www.youtube.com/watch?v=_Zj8XLpf4Pg',
                'thumbnail'=> 'https://img.youtube.com/vi/_Zj8XLpf4Pg/sddefault.jpg',
                'rating'=> 4.5,
                'is_featured'=> 1,
            ],
            [
                'name' => 'The Magic Wanted',
                'slug' => 'the-magic-wanted',
                'category'=> 'Drama',
                'video_url'=> 'https://www.youtube.com/watch?v=ja50quk8IjY',
                'thumbnail'=> 'https://img.youtube.com/vi/ja50quk8IjY/sddefault.jpg',
                'rating'=> 4.2,
                'is_featured'=> 0,
            ],
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category'=> 'Drama',
                'video_url'=> 'https://www.youtube.com/watch?v=Zn5TuSb29jQ',
                'thumbnail'=> 'https://img.youtube.com/vi/Zn5TuSb29jQ/sddefault.jpg',
                'rating'=> 5.5,
                'is_featured'=> 0,
            ]
        ];
        Movie::insert($movies);
    }
}
