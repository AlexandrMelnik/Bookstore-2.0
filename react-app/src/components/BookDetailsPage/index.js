import React, { Component } from 'react';
import BookDetailsCard from '../BookDetailsCard';
import { Col } from 'react-bootstrap';

class BookDetailsPage extends Component {
  componentDidMount() {
    this.props.getBookId(this.props.match.params.id);
  }

  render() {
    const { book, loading } = this.props;
    return (
      <Col md={8} mdOffset={2}>
        {!loading ? 'Loading details book...' :
          <BookDetailsCard
            title={book.title}
            img={book.image}
            desc={book.description}
            rating={book.rating}/>}
      </Col>
    );
  }
}

export default BookDetailsPage;
