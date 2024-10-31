import React from 'react';
import BookList from './components/BookList';

const App = () => {
  return (
    <div className="container mt-5">
      <h1>Gerenciador de Livros</h1>
      <BookList />
    </div>
  );
};

export default App;
