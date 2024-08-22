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
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-100 rounded overflow-hidden shadow">
        <h1 className="text-2xl font-bold mb-4">Library Management</h1>

        <form onSubmit={(e) => {
          e.preventDefault();
          const book = {
            id: Math.random().toString(36).substr(2, 9),
            title: e.target.title.value,
            author: e.target.author.value,
          };
          addBook(book);
          e.target.reset();
        }} className="mb-4 shadow-md rounded-md p-4">
          <h2>Add New Book</h2>
          <div className="mb-2">
            <label htmlFor="title" className="text-sm font-medium block mb-1">
              Title:
            </label>
            <input type="text" id="title" required className="px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-500 border border-gray-300 w-full" />
          </div>
          <div className="mb-2">
            <label htmlFor="author" className="text-sm font-medium block mb-1">
              Author:
            </label>
            <input type="text" id="author" required className="px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-500 border border-gray-300 w-full" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded font-bold focus:outline-none focus:ring focus:ring-blue-500">
            Add Book
          </button>
        </form>

        <h2>Books</h2>
        <div className="grid grid-cols-1 gap-4">
          {books.map((book) => (
            <div key={book._id} className="bg-white rounded-md p-4 shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">{book.bookname}</h3>
                  <p className="text-gray-500">by {book.author}</p>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => handleBookPick(book._id, 'student123')} className="px-3 py-2 bg-green-500 hover:bg-green-700 text-white rounded font-bold focus:outline-none focus:ring focus:ring-green-500">
                    Pick
                  </button>
                  <button onClick={() => handleBookReturn(book._id, 'student123')} className="px-3 py-2 bg-red-500 hover:bg-red-700 text-white rounded font-bold focus:outline-none focus:ring focus:ring-red-500">
                    Return
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
