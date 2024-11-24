import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import DisplayAllBooks from './components/DisplayAllBooks';
import './App.css';


axios.defaultsWithCredinals :true
const App = () => (
  <Router>
    <div className="App-header">
      <h1>Library Management System</h1>
      <div>
        <Link to="/add">
          <button className="add-btn">Add Book</button>
        </Link>
        <Link to="/search">
          <button className="search-btn">Search Book</button>
        </Link>
        
        <Link to="/delete">
          <button className="delete-btn">Delete Book</button>
        </Link>
        <Link to="/display">
          <button className="display-btn">Display All Books</button>
        </Link>
      </div>
      <Routes>
        
        <Route path="book-management-backend0.vercel.app/add" element={<AddBook />} />
        <Route path="book-management-backend0.vercel.app/search" element={<SearchBook />} />
        <Route path="book-management-backend0.vercel.app/delete" element={<DeleteBook />} />
        <Route path="book-management-backend0.vercel.app/display" element={<DisplayAllBooks />} />
      </Routes>
    </div>
  </Router>
);

export default App;
