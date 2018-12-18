import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../components/Book';
import { search } from '../../BooksAPI';

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  handleOnChange = (e) => {
    if(e.target.value.length >= 3) {
      search(e.target.value).then(results => {
        if(results.length > 0)
        this.setState({ results })
      });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input onChange={this.handleOnChange} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.results.map(book => {
                return (
                  <li key={book.id}>
                    <Book
                      id={book.id}
                      author={book.author}
                      title={book.title}
                      cover={book.imageLinks.thumbnail}
                      updateBook={this.props.addBook}
                      isNew={this.props.books.findIndex((savedBook) =>  book.id === savedBook.id) === -1}
                    />
                  </li>
                );
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;