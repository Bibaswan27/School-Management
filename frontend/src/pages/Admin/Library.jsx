// Library.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const Library = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/library/getall');
      setBooks(response.data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/library', {
        bookname: book.title,
        author: book.author,
      });
      setBooks([...books, response.data]);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleBookPick = async (bookId, studentId) => {
    // Implement logic to record when a student picks a book
  };

  const handleBookReturn = async (bookId, studentId) => {
    // Implement logic to mark when a student returns a book
  };

  return (
    <div>
      <Sidebar />
      <div>
        <div>Library Management</div>
        <div
          onSubmit={(e) => {
            e.preventDefault();
            const book = {
              id: Math.random().toString(36).substr(2, 9),
              title: e.target.title.value,
              author: e.target.author.value,
            };
            addBook(book);
            e.target.reset();
          }}
        >
          <h2>Add New Book</h2>
          <div>
            <div htmlFor="title">Title:</div>
            <input type="text" id="title" required />
          </div>
          <div>
            <div htmlFor="author">Author:</div>
            <input type="text" id="author" required />
          </div>
          <button type="submit">Add Book</button>
        </div>

        <h2>Books</h2>
        <div>
          {books.map((book) => (
            <div key={book._id}>
              <div>{book.bookname}</div>
              <div>by {book.author}</div>
              <button onClick={() => handleBookPick(book._id, 'student123')}>Pick</button>
              <button onClick={() => handleBookReturn(book._id, 'student123')}>Return</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
