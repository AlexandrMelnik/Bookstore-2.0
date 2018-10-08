import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signin } from '../redux/actions/account';
import SigninForm from '../components/Forms/SigninForm';

SigninForm.propTypes = {
  signin: PropTypes.func.isRequired,
  serverErrors: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    serverErrors: state.fetchFailure.serverErrors
  }
}

export default connect(mapStateToProps, { signin })(SigninForm);
