import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {
  Badge,
  Navbar,
  Button
} from 'react-bootstrap';
import './index.css';

const CartHeader = (props) => (
  <Navbar.Form pullRight>
    <Link to="/cart">
      <Button className="button-cart">
        <FontAwesome name="shopping-cart" />
        <Badge>{props.itemsLength}</Badge>
       </Button>
    </Link>
  </Navbar.Form>
);

export default CartHeader;
