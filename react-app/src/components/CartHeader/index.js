import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {
  Navbar,
  Button
} from 'react-bootstrap';
import './index.css';

const CartHeader = (props) => (
  <Navbar.Form pullRight>
    <Link to="/cart">
      <Button className="button-cart">
        <FontAwesome name="shopping-cart" />
        <span> {props.itemsLength} </span>
       </Button>
    </Link>
  </Navbar.Form>
);

export default CartHeader;
