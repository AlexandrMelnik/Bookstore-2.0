import React from 'react';
import i18next from 'i18next';
import FontAwesome from 'react-fontawesome';
import StarRatings from 'react-star-ratings';
import { Panel, Col, Row, Image, Button } from 'react-bootstrap';

const BookDetailsCard = (props) => (
  <Panel>
    <Panel.Body>
      <Row>
        <Col xs={12} md={4} className="thumbnail">
          <Image src={props.image}/>
        </Col>
        <Col xs={12} md={8}>
          <h3>{props.title}</h3>
          <StarRatings
            rating={props.rating}
            starDimension="20px"
            starSpacing="2px"
          />
          <p style={{marginTop: '1.300rem'}}>{props.desc}</p>
          <Button bsStyle="info" onClick={() => props.addBookToCart(props)}>
            <FontAwesome name='cart-plus' /> {i18next.t('add_to_cart')}
          </Button>
          <p style={{marginTop: '1.300rem'}}> {i18next.t('menu_categories')}: Drama, Fentesy </p>
        </Col>
      </Row>
    </Panel.Body>
  </Panel>
);

export default BookDetailsCard;
