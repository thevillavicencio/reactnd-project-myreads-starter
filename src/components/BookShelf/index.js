import React from 'react';
import decamelize from 'decamelize';
import Book from '../Book';

const BookShelf = ({ title, books, updateBook }) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{decamelize(title, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {books.map((book) => {
              return (
                <li key={book.title}>
                  <Book
                    title={book.title}
                    author={book.author}
                    cover={book.imageLinks.thumbnail}
                    id={book.id}
                    shelf={book.shelf}
                    updateBook={updateBook}
                  />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;