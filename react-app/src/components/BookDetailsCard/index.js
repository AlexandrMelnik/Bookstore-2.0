import React from 'react';
import FontAwesome from 'react-fontawesome';
import StarRatings from 'react-star-ratings';
import { Panel, Col, Row, Image, Button } from 'react-bootstrap';

const BookDetailsCard = (props) => (
  <Panel>
    <Panel.Body>
      <Row>
        <Col xs={12} md={4} className="thumbnail">
          <Image src={props.img}/>
        </Col>
        <Col xs={12} md={8}>
          <h3>{props.title}</h3>
          <StarRatings
            rating={props.rating}
            starDimension="20px"
            starSpacing="2px"
          />
          <p style={{marginTop: '1.300rem'}}>{props.desc}</p>
          <Button bsStyle="info">
            <FontAwesome name='cart-plus' /> Add to cart
          </Button>
          <p style={{marginTop: '1.300rem'}}> Categories: Drama, Fentesy </p>
        </Col>
      </Row>
    </Panel.Body>
  </Panel>
);

export default BookDetailsCard;
