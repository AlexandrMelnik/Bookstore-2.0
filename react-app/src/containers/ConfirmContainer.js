import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { confirm } from '../redux/actions/account';
import ConfirmPage from '../components/ConfirmPage';

ConfirmPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default connect(null, { confirm })(ConfirmPage);
