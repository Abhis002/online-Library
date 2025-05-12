import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter(book => {
    const matchCategory = category ? book.category === category : true;
    const matchSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="browse-container">
      <h2>Browse Books</h2>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="books-list">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;