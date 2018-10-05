import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBookId } from '../redux/actions/books';
import BookDetailsPage from '../components/BookDetailsPage';

BookDetailsPage.propTypes = {
  book: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state, props) {
  return {
    book: state.books.book,
    loading: state.books.loading,
  }
}

export default connect(mapStateToProps, { getBookId })(BookDetailsPage);
