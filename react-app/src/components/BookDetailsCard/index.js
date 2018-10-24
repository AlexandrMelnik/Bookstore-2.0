import React, { Component } from 'react';
import i18next from 'i18next';
import FontAwesome from 'react-fontawesome';
import StarRatings from 'react-star-ratings';
import { Panel, Col, Row, Image, Button } from 'react-bootstrap';

class BookDetailsCard extends Component {
  state = {
    addCartActiveClass: 'info',
    addCartActiveIcon: 'shopping-cart'
  }

  addToCart (data) {
    this.props.addBookToCart(data);
    this.setState({
      addCartActiveClass: 'success',
      addCartActiveIcon: 'cart-plus' });
  }

  render() {
    const {
      image,
      title,
      price,
      rating,
      description
    } = this.props;

    return (
      <Panel>
        <Panel.Body>
          <Row>
            <Col xs={12} md={4} className="thumbnail">
              <Image src={image}/>
            </Col>
            <Col xs={12} md={8}>
              <h3>{title}</h3>
              <StarRatings
                rating={rating}
                starDimension="20px"
                starSpacing="2px"
              />
              <h4 style={{color: 'green'}}>
                $ {price}
              </h4>
              <p style={{marginTop: '1.300rem'}}>{ description }</p>
              <Button bsStyle={this.state.addCartActiveClass} onClick={this.addToCart.bind(this, this.props)}>
                <FontAwesome name={this.state.addCartActiveIcon} /> {i18next.t('add_to_cart')}
              </Button>
              <p style={{marginTop: '1.300rem'}}> {i18next.t('menu_categories')}: Drama, Fentesy </p>
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    );
  }
}

export default BookDetailsCard;
