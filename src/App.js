import React from 'react'
import Search from './containers/SearchPage';
import Home from './containers/HomePage';
import { Switch, Route } from 'react-router-dom';
import { getAll, get, update } from './BooksAPI';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: []
  }

  componentDidMount() {
    getAll().then(books => this.setState({
      shelves: [...new Set(books.map(item => item.shelf))],
      books
    }));
  }

  updateBook = (bookID, shelf) => {
    const index = this.state.books.findIndex(book => {
      return book.id === bookID
    })

    if(index >= 0) {
      let booksCopy = this.state.books.splice(0);
      let updateBook = booksCopy.splice(booksCopy[index],1);

      updateBook[0].shelf = shelf;
      booksCopy.push(updateBook[0]);

      this.setState({
        books: booksCopy
      });
    }
  }

  addBook = (bookID, shelf) => {
    get(bookID).then(results => {
      update(results, shelf).then(response => {
        const booksCopy = this.state.books.splice(0);
        booksCopy.push(results);
        this.setState({
          books: booksCopy
        })
      })
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Home books={this.state.books} shelves={this.state.shelves} updateBook={this.updateBook}/>} />
          <Route exact path="/search" render={() => <Search addBook={this.addBook} books={this.state.books} />}  />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
