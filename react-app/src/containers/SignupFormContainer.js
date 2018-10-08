import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signup } from '../redux/actions/account';
import SignupForm from '../components/Forms/SignupForm';

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired,
  serverErrors: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    serverErrors: state.fetchFailure.serverErrors
  }
}

export default connect(mapStateToProps, { signup })(SignupForm);
