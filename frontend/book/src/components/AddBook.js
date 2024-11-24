import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const AddBook = () => {
  const [book, setBook] = useState({
    BookTitle: '',
    ISBN: '',
    Author: '',
    Category: '',
    Quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/books', book);
    alert('Book added successfully');
  };

  return (
    <div className="container">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="BookTitle" placeholder="Title" value={book.BookTitle} onChange={handleChange} />
        <input name="ISBN" placeholder="ISBN" value={book.ISBN} onChange={handleChange} />
        <input name="Author" placeholder="Author" value={book.Author} onChange={handleChange} />
        <input name="Category" placeholder="Category" value={book.Category} onChange={handleChange} />
        <input name="Quantity" placeholder="Quantity" value={book.Quantity} onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
