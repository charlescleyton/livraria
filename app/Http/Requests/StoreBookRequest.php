<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
{
    public function authorize()
    {
        return true; // Altere se houver necessidade de autorização
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'genre' => 'required|string|max:100',
            'year' => 'required|integer|min:1900|max:' . date('Y'),
            'description' => 'nullable|string',
        ];
    }
}
