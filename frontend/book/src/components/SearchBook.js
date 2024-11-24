import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const SearchBook = () => {
  const [isbn, setIsbn] = useState('');
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!isbn) {
      alert('Please enter an ISBN');
      return;
    }
    try {
      const result = await axios.get(`http://localhost:3000/books/${isbn}`);
      if (result.data) {
        setBook(result.data);
        setError(''); // Clear any previous errors
      } else {
        setBook(null);
        setError('Book not found!'); // Set error message if no book is found
      }
    } catch (error) {
      setBook(null);
      setError('Book not found!'); // Set error message if request fails
    }
  };

  return (
    <div className="container">
      <h2>Search Book</h2>
      <form onSubmit={(e) => e.preventDefault()} className="form-style">
        <input
          placeholder="Enter ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {book && (
        <div className="book-card">
          <h3>Book Details</h3>
          <p><strong>Title:</strong> {book.BookTitle}</p>
          <p><strong>Author:</strong> {book.Author}</p>
          <p><strong>Category:</strong> {book.Category}</p>
          <p><strong>Quantity:</strong> {book.Quantity}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBook;
