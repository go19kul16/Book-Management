const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://125156034:<3o4VMeAfxuk8p1oC>@cluster0.uhduh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const bookSchema = new mongoose.Schema({
  BookTitle: String,
  ISBN: String,
  Author: String,
  Category: String,
  Quantity: Number
});

const Book = mongoose.model('Book', bookSchema);

app.use(cors(
  {
      origin:[],
      methods:["POST","GET"],
      credentials:true
  }
));



app.use(express.json());

// Add Book
app.post('/books', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.send(book);
});

// Search Book by ISBN
app.get('/books/:isbn', async (req, res) => {
  const book = await Book.findOne({ ISBN: req.params.isbn });
  res.send(book || { error: 'Book not found' });
});

// Delete Book by ISBN
app.delete('/books/:isbn', async (req, res) => {
  await Book.findOneAndDelete({ ISBN: req.params.isbn });
  res.send({ message: 'Book deleted' });
});

// Get all books
app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

app.listen(3000, () => console.log('Server running on port 3000'));