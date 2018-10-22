import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../redux/actions/account';
import { setLocale } from '../redux/actions/locale';
import CategoriesList from '../components/CategoriesList';

CategoriesList.propTypes = {
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    loading: state.categories.loading,
    categories: state.categories.categories
  }
}

export default connect(mapStateToProps, null)(CategoriesList);
