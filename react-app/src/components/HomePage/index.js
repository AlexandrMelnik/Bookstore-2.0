import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import BooksList from '../BooksList';

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
            Home page - Popular books
          </Label>
        </h4>
        <hr />
        {!loading ? 'Loading books' : <BooksList books={books} />}
      </div>
    );
  }
}

export default HomePage;
