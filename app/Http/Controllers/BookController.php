<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Services\BookService;
use Illuminate\Http\Request;

class BookController extends Controller
{
    protected $bookService;

    public function __construct(BookService $bookService)
    {
        $this->bookService = $bookService;
    }

    public function index(Request $request)
    {
        $title = $request->input('title');
        $books = $this->bookService->getAllBooks($title);
        return response()->json($books);
    }

    public function store(StoreBookRequest $request)
    {
        $book = $this->bookService->createBook($request->validated());
        return response()->json($book, 201);
    }

    public function show($id)
    {
        $book = $this->bookService->getBookById($id);
        return response()->json($book);
    }

    public function update(UpdateBookRequest $request, $id)
    {
        $book = $this->bookService->updateBook($id, $request->validated());
        return response()->json($book);
    }

    public function destroy($id)
    {
        $this->bookService->deleteBook($id);
        return response()->json(null, 204);
    }
}
