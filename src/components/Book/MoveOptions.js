import React, { Component } from 'react';
import { get, update } from '../../BooksAPI';

class MoveOptions extends Component {

  state = {
    shelves: [
      {
        name: 'currentlyReading',
        selected: false
      },
      {
        name: 'wantToRead',
        selected: false
      },
      {
        name: 'read',
        selected: false
      },
      {
        name: 'none',
        selected: false
      }
    ]
  }

  renderOptions = () => {
    const options = this.state.shelves.map(shelf => {
      return (
        <option key={shelf.name} value={shelf.name}>{shelf.name}</option>
      );
    })

    return options;
  }

  updateShelf = (e) => {
    const newShelf = e.target.value
    if(this.props.isNew) {
      this.props.updateBook(this.props.book, newShelf);
    }
    else {
      get(this.props.book).then(results => {
        update(results, newShelf).then(response => {
          this.props.updateBook(this.props.book, newShelf);
        })
      });
    }
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.selectedShelf} onChange={(e) => this.updateShelf(e)}>
          <option value="move" disabled>Move to...</option>
          {this.renderOptions()}
        </select>
      </div>
    );
  }
}


export default MoveOptions;