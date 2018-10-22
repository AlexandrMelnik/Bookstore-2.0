import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../components/Search';

Search.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    categories_id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps, null)(Search);
