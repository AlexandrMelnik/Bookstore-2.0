import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import BooksList from '../BooksList';
import i18next from 'i18next';

class HomePage extends Component {
  componentDidMount() {
    this.props.getAllBooks();
  }

  render() {
    const { loading, books } = this.props;
    return (
      <div className="home">
        <h4>
          <Label bsStyle="primary">
             {i18next.t('home_page')} - {i18next.t('popular_book')}
          </Label>
        </h4>
        <hr />
        {!loading ? 'Loading books' : <BooksList books={books} />}
      </div>
    );
  }
}

export default HomePage;
