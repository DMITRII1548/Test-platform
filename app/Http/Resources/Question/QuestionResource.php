<?php

namespace App\Http\Resources\Question;

use App\Http\Resources\Choice\ChoiceResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'right_choice_qt' => $this->choices->pluck(true)->count(),
            'choices' => ChoiceResource::collection($this->choices)
        ];
    }
}
