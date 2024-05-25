import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    title: String,
    image: String,
    category: String,
  }
);

export const Book = mongoose.model("Book", booksSchema);
