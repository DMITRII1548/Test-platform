<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Choice;
use App\Models\Question;
use App\Models\Test;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $user = User::factory()
            ->has(
                Test::factory()
                    ->has(
                        Question::factory()
                            ->has(
                                Choice::factory()
                                    ->count(random_int(4, 5))
                            )
                            ->count(10)
                    )
                    ->count(4)
                )
            ->create();

        foreach ($user->tests as $test) {
            foreach ($test->questions as $question) {
                if (random_int(0, 1)) {
                    $choice = $question->choices->first();
                    $choice->update([
                        'is_true' => 1
                    ]);
                } else {
                    $choice = $question->choices->last();
                    $choice->update([
                        'is_true' => 1
                    ]);
                }
            }
        }
    }
}
