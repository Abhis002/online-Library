import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Online Library</h1>
      <h2 className="categories-title">Explore Categories:</h2>
      <ul className="categories-list">
        <li><Link className="category-link" to="/books/Fiction">Fiction</Link></li>
        <li><Link className="category-link" to="/books/Non-Fiction">Non-Fiction</Link></li>
        <li><Link className="category-link" to="/books/Sci-Fi">Sci-Fi</Link></li>
      </ul>
      <div className="popular-books">
        <h2 className="popular-books-title">Popular Books</h2>
        <div className="book-item">
          <h3 className="book-title">The Great Gatsby</h3>
          <p className="book-author">By F. Scott Fitzgerald</p>
          <Link className="view-details-link" to="/book/1">View Details</Link>
        </div>
        <div className="book-item">
          <h3 className="book-title">To Kill a Mockingbird</h3>
          <p className="book-author">By Harper Lee</p>
          <Link className="view-details-link" to="/book/2">View Details</Link>
        </div>
      </div>
      <div className="explore-more">
        <h3>Explore More:</h3>
        <ul className="explore-links">
          <li><Link className="explore-link" to="/browse">Browse All Books</Link></li>
          <li><Link className="explore-link" to="/add">Add a New Book</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;