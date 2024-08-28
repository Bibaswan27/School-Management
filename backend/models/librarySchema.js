import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isBorrowed: {
    type: Boolean,
    required: true,
  }
});


export const  Library = mongoose.model('Library', librarySchema);



