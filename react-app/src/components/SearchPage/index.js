import React, { Component } from 'react';
import i18next from 'i18next';
import { Label } from 'react-bootstrap';
import BooksList from '../BooksList';

class SearchPage extends Component {
  render() {
    const { books, loading } = this.props;
    console.log(books);
    return (
      <div className="search-page">
        <h4>
          <Label bsStyle="primary">
             Поиск: {this.props.match.params.query} - Результатов: {books.length}
          </Label>
        </h4>
        <hr />
        {!loading ?  i18next.t('loading') : <BooksList books={books} />}
      </div>
    );
  }
}

export default SearchPage;
