import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const LibrarySection = () => {
  const [books, setBooks] = useState([]);
  const [borrowedBooks,setBorrowedBooks]=useState([]);

  useEffect(() => {
    fetchBooks();
    handleBorrowBook();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/library/getall');
      setBooks(response.data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleBorrowBook = async (id) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/v1/library/books/${id}/pick`);
  
      if (response.status === 200) {
        setBorrowedBooks([...borrowedBooks, response.data]);
      }
    } catch (error) {
      console.error('Error borrowing book:', error);
    }
  };

  return (
    <div className="flex">  {/* Main container with flexbox */}
      <Sidebar className="w-64 bg-gray-800 text-white px-4 py-2" />  {/* Sidebar styles */}
      <div className="flex-1 bg-gray-100 p-4">  {/* Content area styles */}
        <h1 className="text-2xl font-bold mb-4">Library</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  {/* Grid for books */}
          {books.map((book) => (
            <div key={book._id} className="bg-white p-4 rounded shadow-md">  {/* Book card styles */}
              <h3 className="text-lg font-medium mb-2">{book.bookname}</h3>
              <p className="text-gray-600 mb-2">Author: {book.author}</p>
              <button
                onClick={() => handleBorrowBook(book._id)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Borrow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibrarySection;
