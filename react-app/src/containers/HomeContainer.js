import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPopularBooks } from '../redux/actions/books';
import HomePage from '../components/HomePage';

HomePage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    categories_id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
  getPopularBooks: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    books: state.books.books,
    loading: state.books.loading,
  }
}

export default connect(mapStateToProps, { getPopularBooks })(HomePage);
