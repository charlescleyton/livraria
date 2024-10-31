<?php
namespace App\Services;

use App\Models\Book;

class BookService
{
    public function getAllBooks($title = null)
    {
        $query = Book::query();

        if ($title) {
            $query->where('title', 'like', '%' . $title . '%');
        }

        return $query->get();
    }

    public function createBook(array $data)
    {
        return Book::create($data);
    }

    public function getBookById($id)
    {
        return Book::findOrFail($id);
    }

    public function updateBook($id, array $data)
    {
        $book = $this->getBookById($id);
        $book->update($data);
        return $book;
    }

    public function deleteBook($id)
    {
        $book = $this->getBookById($id);
        $book->delete();
    }
}
