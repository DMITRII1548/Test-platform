<?php

namespace App\Http\Resources\Question;

use App\Http\Resources\Choice\ChoiceResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MinifiedQuestionResource extends JsonResource
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
            'choices' => ChoiceResource::collection($this->choices)
        ];
    }
}
