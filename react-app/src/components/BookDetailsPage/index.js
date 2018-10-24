import React, { Component } from 'react';
import BookDetailsCard from '../BookDetailsCard';
import { Col } from 'react-bootstrap';

class BookDetailsPage extends Component {
  componentDidMount() {
    this.props.getBookId(this.props.match.params.id);
  }

  render() {
    const { book, loading, addBookToCart } = this.props;
    return (
      <Col md={8} mdOffset={2}>
        {loading
          ? <BookDetailsCard
            {...book}
            addBookToCart={addBookToCart} />
          : 'Loading details book...'}
      </Col>
    );
  }
}

export default BookDetailsPage;
