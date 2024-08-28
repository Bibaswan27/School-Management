import {Library } from "../models/librarySchema.js";
export const createBook = async (req, res) => {
  console.log(req.body);
  const { name, author } = req.body;
  try {
    if (!name || !author) {
      return next("Please Fill Full Form!", 400);
    }

    await Library.create({ name, author, isBorrowed: false });
    res.status(200).json({
      success: true,
      message: "A new book is Created!",
    });
  } catch (err) {
    return res.status(400).json({message:err});
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Library.find();
    res.status(200).json({
      success: true,
      books,
    });
  } catch (err) {
    return res.status(400).json({message:err});
  }
};

export const pickBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Library.findById(bookId);
    if (!book) {
      return res.json({message: "Book not found"});
    }
    if (book.isBorrowed) {
      return res.json({message:"Book is already borrowed"});
    }
    else 
    {
      book.isBorrowed = true;
      await book.save();
      return res.status(200).json({message : "Book Borrowed"});
    }

  } catch (err) {
    return res.status(400).json({message:err});
  }
};

export const returnBook = async (req, res) => {
  try {
    const { bookId } = req.params;

    const book = await Library.findById(bookId);
    if (!book) {
      return res.json({message: "Book not found"}, 404);
    }
    if (!book.isBorrowed) {
      return res.json({message:"Book is not currently borrowed"}, 400);
    }
    else 
    {
    book.isBorrowed = false;
    await book.save();
    }
    res.status(200).json({
      success: true,
      message: "Book returned successfully",
    });
  } catch (err) {
    return res.status(400).json({message:err});
  }
};


