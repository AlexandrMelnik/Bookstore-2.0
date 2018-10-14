import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartPage from '../components/CartPage';

CartPage.propTypes = {
  itemsLength: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    itemsLength: state.cart.items.length,
    cartItems: state.cart.items
  }
}

export default connect(mapStateToProps, null)(CartPage);
