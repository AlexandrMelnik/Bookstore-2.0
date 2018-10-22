import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import BooksList from '../BooksList';
import i18next from 'i18next';

class CategoriesPage extends Component {
  render() {
    const { loading, books } = this.props;
    return (
      <div className="categories_page">
        <h4>
          <Label bsStyle="primary">
             { i18next.t('menu_categories') }
          </Label>
        </h4>
        <hr />
        { !loading
          ? i18next.t('loading')
          : <BooksList books={books} />
        }
      </div>
    );
  }
}

export default CategoriesPage;
