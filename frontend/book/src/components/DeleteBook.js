import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const DeleteBook = () => {
  const [isbn, setIsbn] = useState('');

  const handleDelete = async () => {
    if (!isbn) {
      alert('Please enter an ISBN');
      return;
    }
    await axios.delete(`http://localhost:3000/books/${isbn}`);
    alert('Book deleted successfully');
    setIsbn('');
  };

  return (
    <div className="container">
      <h2>Delete Book</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Enter ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default DeleteBook;
