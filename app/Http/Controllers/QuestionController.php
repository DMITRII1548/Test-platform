<?php

namespace App\Http\Controllers;

use App\Http\Requests\Question\UpdateRequest;
use App\Http\Resources\Question\MinifiedQuestionResource;
use App\Models\Question;
use App\Models\Test;
use Illuminate\Http\Response;

class QuestionController extends Controller
{
    public function store(Test $test): array 
    {
        $question = $test->questions()->create([]);

        return MinifiedQuestionResource::make($question)->resolve();
    }

    public function update(Question $question, UpdateRequest $request): array
    {
        $data = $request->validated();

        $question->update($data);

        return MinifiedQuestionResource::make($question)->resolve();
    }

    public function destroy(Question $question): Response
    {
        $question->choices()->delete();
        $question->delete();

        return response([
            'deleted' => true
        ]);
    }
}
