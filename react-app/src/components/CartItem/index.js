import React, { Component } from 'react';
import { Media, Button, ButtonGroup, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import i18next from 'i18next';

class CartItem extends Component {
  render() {
    return (
      <Media>
        <Media.Left>
          <img width={64} height={64} src={this.props.cartItem.image} alt={this.props.image} />
        </Media.Left>
        <Media.Body>
          <Media.Heading>{this.props.cartItem.title}</Media.Heading>
          <Col>
            <ButtonGroup>
              <Button bsStyle="info" bsSize="small" onClick={this.props.deductQuality}>
                -
              </Button>
              <Button bsSize="small">{i18next.t('quantity')}: {i18next.t('books', {count: this.props.cartItem.count})}</Button>
              <Button bsStyle="info" bsSize="small" onClick={this.props.addQuality}>
                +
              </Button>
            </ButtonGroup>
          </Col>
          <h5>
            {i18next.t('price')}:
            {' '}
            <span style={{color: 'green'}}>
              ${this.props.cartItem.price * this.props.cartItem.count}
            </span>
          </h5>
        </Media.Body>
        <Media.Left>
          <Button>
            <FontAwesome name="times" style={{display: 'block'}} />
          </Button>
        </Media.Left>
        <hr />
      </Media>
    );
  }
}

export default CartItem;
