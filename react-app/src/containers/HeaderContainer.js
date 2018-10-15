import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../redux/actions/account';
import { setLocale } from '../redux/actions/locale';
import Header from '../components/Header';

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  setLocale: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.account.token,
    loading: state.categories.loading,
    categories: state.categories.categories,
    locale: state.locale
  }
}

export default connect(mapStateToProps, { logout, setLocale })(Header);
