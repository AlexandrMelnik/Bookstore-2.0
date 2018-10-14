import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartHeader from '../components/CartHeader';

CartHeader.propTypes = {
  itemsLength: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    itemsLength: state.cart.items.length
  }
}

export default connect(mapStateToProps, null)(CartHeader);
