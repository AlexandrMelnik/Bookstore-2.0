import React, { Component } from 'react';
import i18next from 'i18next';
import { Label } from 'react-bootstrap';
import BooksList from '../BooksList';


const SearchPage = ({ books, loading }) => (
  <div className="search-page">
    <h4>
      <Label bsStyle="primary">
         {i18next.t('search')}: {this.props.match.params.query} - {i18next.t('results')}: {books.length}
      </Label>
    </h4>
    <hr />
    {loading
      ? <BooksList books={books} />
      : i18next.t('loading')
    }
  </div>
);

export default SearchPage;
