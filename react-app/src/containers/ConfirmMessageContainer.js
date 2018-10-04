import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmMessage from '../components/ConfirmMessage';

ConfirmMessage.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isConfirm: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.account.token,
    isConfirm: !!state.account.confirm
  }
}

export default connect(mapStateToProps, null)(ConfirmMessage);
