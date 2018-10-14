import React, { Component } from 'react';
import i18next from 'i18next';
import CartItem from '../../containers/CartItemContainer';

class CartItemsList extends Component {
  AddQuantity (id) {
    this.props.updateQuantityItem({id, quantity: 1})
  }

  DeductQuantity (id) {
    this.props.updateQuantityItem({id, quantity: -1})
  }

  render() {
    const { items } = this.props;
    if(items.length === 0) {
      return (
        <div className="cart_empty">
          {i18next.t('cart_empty')}
        </div>
      );
    } else {
      return items.map((item, index) => (
        <CartItem
          key={index}
          cartItem={item}
          deductQuality={this.DeductQuantity.bind(this, item.id)}
          addQuality={this.AddQuantity.bind(this, item.id)} />
      ));
    }
  }
}

export default CartItemsList;
