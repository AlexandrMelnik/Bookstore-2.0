import React, { Component } from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import FontAwesome from 'react-fontawesome';
import { Col, Panel, Image, Button, Row } from 'react-bootstrap';
import './index.css';

class BookCard extends Component {
  state = {
    addedToCart: false,
    addCartActiveClass: 'info',
    addCartActiveIcon: 'shopping-cart'
  }

  addToCart (data) {
    this.props.addBookToCart(data);
    this.setState({
      addCartActiveClass: 'success',
      addCartActiveIcon: 'cart-plus' });
  }

  render () {
    const {
      image,
      title,
      author,
      price,
      rating,
      id
    } = this.props;

    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <Panel>
          <Panel.Body className="thumbnail">
            <Image src={image} />
            <h4 className="title-card">
              {title}
            </h4>
            <h6>
              {author}
            </h6>
            <StarRatings
              rating={rating}
              starDimension="15px"
              starSpacing="2px"
            />
            <h5 style={{color: 'green'}}>
              $ {price}
            </h5>
            <hr />
            <Row className="show-grid">
              <Col xs={12}>
                <p>
                  <Button bsStyle={this.state.addCartActiveClass} bsSize="small" block onClick={this.addToCart.bind(this, this.props)}>
                    <FontAwesome name={this.state.addCartActiveIcon} />
                    {' '} {i18next.t('add_to_cart')}
                  </Button>
                </p>
                <Link to={'/book/' + id} style={{textDecoration: 'none'}}>
                  <Button bsStyle="default" bsSize="small" block>{i18next.t('details')}</Button>
                </Link>
              </Col>
            </Row>
          </Panel.Body>
        </Panel>
      </Col>
    );
  }
}

export default BookCard;
