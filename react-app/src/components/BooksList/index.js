import React from 'react';
import BookCard from '../../containers/BookCardContainer';
import i18next from 'i18next';

const BooksList = ({books}) => {
  if(books.length === 0) {
    return (
      <div>
        {i18next.t('no_data')}
      </div>
    );
  } else {
    return books.map((book, index) => (
      <BookCard
        key={index}
        id={book.id}
        title={book.title}
        author={book.author}
        rating={book.rating}
        image={book.image}
        price={book.price} />
    ));
  }
};

export default BooksList;
