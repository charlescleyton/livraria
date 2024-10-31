<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookRequest extends FormRequest
{
    public function authorize()
    {
        return true; // Altere se houver necessidade de autorização
    }

    public function rules()
    {
        return [
            'title' => 'sometimes|required|string|max:255',
            'author' => 'sometimes|required|string|max:255',
            'genre' => 'sometimes|required|string|max:100',
            'year' => 'sometimes|required|integer|min:1900|max:' . date('Y'),
            'description' => 'nullable|string',
        ];
    }
}
