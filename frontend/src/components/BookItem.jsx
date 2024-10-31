import React from 'react';
import axios from 'axios';

const BookItem = ({ book, fetchBooks }) => {
  const handleDelete = async () => {
    await axios.delete(`http://127.0.0.1:8000/api/books/${book.id}`);
    fetchBooks();
  };

  return (
    <li className="list-group-item">
      <h5>{book.title}</h5>
      <p>Autor: {book.author}</p>
      <p>Gênero: {book.genre}</p>
      <p>Ano: {book.year}</p>
      <p>Descrição: {book.description}</p>
      <button className="btn btn-danger" onClick={handleDelete}>Deletar</button>
      {/* Aqui você pode adicionar um botão para editar o livro */}
    </li>
  );
};

export default BookItem;
