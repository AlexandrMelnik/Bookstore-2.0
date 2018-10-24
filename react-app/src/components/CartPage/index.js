import React, { Component } from 'react';
import i18next from 'i18next';
import { Panel, Col } from 'react-bootstrap';
import CartItemsList from '../../containers/CartItemsListContainer';

class CartPage extends Component {
  totalPrice(cartItems) {
    return cartItems.reduce((price, item) => {
     price += item.price * item.count;
     return price;
    }, 0);
  }

  render () {
    const { itemsLength, cartItems } = this.props;
    return (
      <Col md={8} mdOffset={2}>
        <Panel>
          <Panel.Body>
            <h4>
               {i18next.t('items', {count: itemsLength})}
            </h4>
            <hr />
            <CartItemsList  />
            {!itemsLength
              ? ''
              : <h4>
                 {i18next.t('total_price')}
                 <span className="color-green">
                   {' '}
                   $ {this.totalPrice(cartItems)}
                 </span>
               </h4>
             }
          </Panel.Body>
        </Panel>
      </Col>
    );
  }
}

export default CartPage;
