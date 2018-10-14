import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateQuantityItem, deleteCartItem } from '../redux/actions/cart';
import CartItemsList from '../components/CartItemsList';

CartItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  updateQuantityItem: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.cart.items
  }
}

export default connect(mapStateToProps, {  updateQuantityItem, deleteCartItem  })(CartItemsList);
