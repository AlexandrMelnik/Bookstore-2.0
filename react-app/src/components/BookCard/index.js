import React from 'react';
import StarRatings from 'react-star-ratings';
import { Col, Panel, Image } from 'react-bootstrap';

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
      </Panel.Body>
    </Panel>
  </Col>
);

export default BookCard;
