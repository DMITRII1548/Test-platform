<?php

namespace App\Http\Controllers;

use App\Http\Resources\Choice\ChoiceResource;
use App\Models\Choice;
use App\Models\Question;
use App\Http\Requests\Choice\UpdateRequest;
use Illuminate\Http\Response;

class ChoiceController extends Controller
{
    public function store(Question $question): array
    {
        $choice = $question->choices()->create([]);

        return ChoiceResource::make($choice)->resolve();
    }

    public function update(Choice $choice, UpdateRequest $request)
    {
        $data = $request->validated();

        $choice->update($data);

        return ChoiceResource::make($choice)->resolve();
    }

    public function destroy(Choice $choice): Response
    {
        $choice->delete();

        return response([
            'deleted' =>  true
        ]);
    }
}
