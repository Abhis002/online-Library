import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state => state.books.find(b => b.id === parseInt(id)));

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}</p>
      <Link to="/browse">Back to Browse</Link>
    </div>
  );
}

export default BookDetails;