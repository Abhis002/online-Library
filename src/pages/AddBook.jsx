import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [form, setForm] = useState({ title: "", author: "", category: "", description: "", rating: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(state => state.books);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { title, author, category, description, rating } = form;
    if (!title || !author || !category || !description || !rating) return;
    const newBook = { id: books.length + 1, ...form, rating: parseFloat(rating) };
    dispatch({ type: "ADD_BOOK", payload: newBook });
    navigate("/browse");
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input type="text" name="author" placeholder="Author" value={form.author} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input type="number" step="0.1" name="rating" placeholder="Rating" value={form.rating} onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;