import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import FontAwesome from 'react-fontawesome';
import { Col, Panel, Image, Button, Row } from 'react-bootstrap';

const BookCard = (props) => (
  <Col xs={12} sm={6} md={4} lg={3}>
    <Panel>
      <Panel.Body className="thumbnail">
        <Image src={props.image}  />
        <h4>
          {props.title}
        </h4>
        <h6>
          {props.author}
        </h6>
        <StarRatings
          rating={props.rating}
          starDimension="20px"
          starSpacing="2px"
        />
        <hr />
        <Row className="show-grid">
          <Col xs={12} md={4}>
            <p><Button bsStyle="info" block><FontAwesome name='cart-plus' /></Button></p>
          </Col>
          <Col  md={8}>
            <Link to={'/book/' + props.id} style={{textDecoration: 'none'}}>
              <Button bsStyle="default" block>Details</Button>
            </Link>
          </Col>
        </Row>
      </Panel.Body>
    </Panel>
  </Col>
);

export default BookCard;
