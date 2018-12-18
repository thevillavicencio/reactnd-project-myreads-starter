import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookShelf from '../../components/BookShelf';

class Home extends Component {

  renderBookShelf = (shelf) => {
    const books = this.props.books.filter((book) => {
      return book.shelf === shelf
    })

    return (
      <BookShelf
        key={shelf}
        title={shelf}
        books={books}
        updateBook={this.props.updateBook}
      />
    )
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              this.props.shelves.map(shelf => {
                return this.renderBookShelf(shelf)
              })
            }
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;