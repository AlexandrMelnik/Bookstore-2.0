import { connect } from 'react-redux';
import SearchPage from '../components/SearchPage';

function mapStateToProps(state, ownProps) {
  return {
    books: state.books.books.filter(book => book.title.includes(ownProps.match.params.query))
  }
}

export default connect(mapStateToProps, null)(SearchPage);
