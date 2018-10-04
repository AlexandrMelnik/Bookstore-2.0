import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signin } from '../redux/actions/account';
import SigninPage from '../components/SigninPage';

SigninPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signin: PropTypes.func.isRequired
}

export default connect(null, { signin })(SigninPage);
