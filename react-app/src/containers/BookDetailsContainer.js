import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBookId } from '../redux/actions/books';
import { addBookToCart } from '../redux/actions/cart';
import BookDetailsPage from '../components/BookDetailsPage';

BookDetailsPage.propTypes = {
  book: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  addBookToCart: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    book: state.books.book,
    loading: state.books.loading,
  }
}

export default connect(mapStateToProps, { getBookId, addBookToCart })(BookDetailsPage);
