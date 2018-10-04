import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signup } from '../redux/actions/account';
import SignupPage from '../components/SignupPage';

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
}

export default connect(null, { signup })(SignupPage);
