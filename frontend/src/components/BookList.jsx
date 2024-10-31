import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookEditForm from './BookEditForm';
import BookForm from './BookForm';

const ITEMS_PER_PAGE = 10;

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchBooks();
  }, [search]);

  const fetchBooks = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/books', {
      params: { title: search },
    });
    setBooks(response.data);
    setTotalPages(Math.ceil(response.data.length / ITEMS_PER_PAGE));
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1); // Reset to the first page on new search
  };

  const openEditModal = (book) => {
    setSelectedBook(book);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedBook(null);
  };

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const displayedBooks = books.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar por título"
        value={search}
        onChange={handleSearch}
        className="mb-3 form-control"
      />
      <button onClick={openAddModal} className="mb-1 btn btn-success">Adicionar Livro</button>

      <table className="table table-striped">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Título</th>
            <th>Autor</th>
            <th>Gênero</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {displayedBooks.map((book) => (
            <tr key={book.id}>
              {/* <td>{book.id}</td> */}
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.year}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => openEditModal(book)}>Editar</button>
                <button className="btn btn-danger" onClick={() => {
                  axios.delete(`http://127.0.0.1:8000/api/books/${book.id}`).then(fetchBooks);
                }}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="btn btn-secondary me-2">Anterior</button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-secondary ms-2">Próxima</button>
      </div>

      {showEditModal &&
        <BookEditForm book={selectedBook} fetchBooks={fetchBooks} closeModal={closeEditModal} />
      }

      {showAddModal &&
        <BookForm fetchBooks={fetchBooks} closeModal={closeAddModal} />
      }
    </div>
  );
};

export default BookList;
