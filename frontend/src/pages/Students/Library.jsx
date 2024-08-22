// LibrarySection.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const LibrarySection = () => {
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

  const handleBorrowBook = (id) => {
    // Implement borrow book functionality here
    console.log(`Book with ID ${id} has been borrowed.`);
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <div>Library</div>
        <div>
          {books.map((book) => (
            <div key={book._id}>
              <div>{book.bookname}</div>
              <p>Author: {book.author}</p>
              <div onClick={() => handleBorrowBook(book._id)}>Borrow</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibrarySection;
