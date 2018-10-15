import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoriesPage from '../components/CategoriesPage';

CategoriesPage.propTypes = {
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    books: state.books.books.filter((e) => {return e.categories_id ===  Number(ownProps.match.params.id)}),
    loading: state.books.loading
  }
}

export default connect(mapStateToProps, null)(CategoriesPage);
