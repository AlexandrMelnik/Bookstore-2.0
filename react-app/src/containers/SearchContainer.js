import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchPage from '../components/SearchPage';

SearchPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    categories_id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequire,
  loading: PropTypes.bool.isRequire
}

function mapStateToProps(state, ownProps) {
  return {
    books: state.books.books.filter(book => book.title.includes(ownProps.match.params.query)),
    loading: state.books.loading
  }
}

export default connect(mapStateToProps, null)(SearchPage);
