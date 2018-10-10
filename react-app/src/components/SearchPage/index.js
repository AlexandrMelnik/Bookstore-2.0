import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import BooksList from '../BooksList';

class SearchPage extends Component {
  render() {
    const { books } = this.props;
    console.log(books);
    return (
      <div className="search-page">
        <h4>
          <Label bsStyle="primary">
             Результатов: {books.length}
          </Label>
        </h4>
        <hr />
        <BooksList books={books} />
      </div>
    );
  }
}

export default SearchPage;
