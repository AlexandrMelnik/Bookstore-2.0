import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../redux/actions/account';
import { getCategories } from '../redux/actions/categories';
import Header from '../components/Header';

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.account.token,
    loading: state.categories.loading,
    categories: state.categories.categories
  }
}

export default connect(mapStateToProps, { logout, getCategories })(Header);
