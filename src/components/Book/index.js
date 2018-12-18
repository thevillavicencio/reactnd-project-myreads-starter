import React from 'react';
import MoveOptions from './MoveOptions';
const Book = ({ id, title, author, cover, shelf, updateBook, isNew}) => {

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={
          {
            width: 128,
            height: 193,
            backgroundImage: `url("${cover}")`
          }
        }></div>
        <MoveOptions book={id} selectedShelf={shelf} updateBook={updateBook} isNew={isNew} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
}


export default Book;