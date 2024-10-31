import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookEditForm = ({ book, fetchBooks, closeModal }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre);
  const [year, setYear] = useState(book.year);
  const [description, setDescription] = useState(book.description);

  useEffect(() => {
    setTitle(book.title);
    setAuthor(book.author);
    setGenre(book.genre);
    setYear(book.year);
    setDescription(book.description);
  }, [book]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.put(`http://127.0.0.1:8000/api/books/${book.id}`, {
      title,
      author,
      genre,
      year,
      description,
    });
    fetchBooks();
    closeModal();
  };

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={closeModal}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Livro</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} className="mb-2 form-control" required />
              <input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} className="mb-2 form-control" required />
              <input type="text" placeholder="Gênero" value={genre} onChange={(e) => setGenre(e.target.value)} className="mb-2 form-control" required />
              <input type="number" placeholder="Ano" value={year} onChange={(e) => setYear(e.target.value)} className="mb-2 form-control" required />
              <textarea placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} className="mb-2 form-control" required></textarea>
              <button type="submit" className="btn btn-success">Salvar Alterações</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookEditForm;
