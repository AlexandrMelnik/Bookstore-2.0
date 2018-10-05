import React from 'react';
import BookCard from '../BookCard';

const BooksList = ({books}) => {
    return books.map((book, index) => (
      <BookCard
        key={index}
        id={book.id}
        title={book.title}
        author={book.author}
        rating={book.rating}
        image={book.image} />
    ));
};

export default BooksList;
