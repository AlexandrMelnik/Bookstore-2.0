import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Image,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import './index.css';

class Header extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { isAuth, logout, loading, categories } = this.props;
    return (
      <Navbar  collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className='modern-brand'>
            <Link to="/">
              <Image width="30" src="/logo.png" alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle className="toggle">
            <FontAwesome style={{display: 'block'}} name="bars" />
          </Navbar.Toggle>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <NavItem componentClass={ Link } eventKey={1} to="/" href="/">
              Home
            </NavItem>
            <NavDropdown title="Categories" eventKey={2} id="basic-nav-dropdown">
              {!loading && 'Loading categories...'}
              {categories.map((category, index) => (
                <MenuItem componentClass={Link} key={index} to={'/category/' + category.id} href={'/category/' + category.id}>{category.name}</MenuItem>
              ))}
            </NavDropdown>
          </Nav>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl className="modern-search" type="text" placeholder="Search books" />
            </FormGroup>
          </Navbar.Form>
          {
            isAuth ?
            <Nav pullRight>
              <NavDropdown
                eventKey={1}
                title={ <Image width={20} src="/user.png" circle /> }
                id="basic-nav-dropdown"
                >
                <MenuItem componentClass={Link} eventKey={1.1} to="/profile" href="/profile">Profile</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={1.2} onClick={() => logout()}>Logout</MenuItem>
              </NavDropdown>
            </Nav>
            :
            <Nav pullRight>
              <NavItem componentClass={ Link } eventKey={1} to="/signin" href="/signin">
                Signin
              </NavItem>
              <NavItem componentClass={ Link } eventKey={2} to="/signup" href="/signup">
                Signup
              </NavItem>
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
