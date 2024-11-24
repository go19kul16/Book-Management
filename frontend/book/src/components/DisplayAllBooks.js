import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const DisplayAllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await axios.get('http://localhost:3000/books');
      setBooks(result.data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h2>All Books</h2>
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <div className="book-card">
              <h3>{book.BookTitle}</h3>
              <p><strong>Author:</strong> {book.Author}</p>
              <p><strong>ISBN:</strong> {book.ISBN}</p>
              <p><strong>Category:</strong> {book.Category}</p>
              <p><strong>Quantity:</strong> {book.Quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayAllBooks;
