import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import FontAwesome from 'react-fontawesome';
import Search from '../../components/Search';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Image
} from 'react-bootstrap';
import './index.css';

class Header extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { isAuth, logout, loading, categories, setLocale } = this.props;
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
              {i18next.t('menu_main')}
            </NavItem>
            <NavDropdown title={i18next.t('menu_categories')} eventKey={2} id="basic-nav-dropdown">
              {!loading ? i18next.t('loading')  :
              categories.map((category, index) => (
                <MenuItem componentClass={Link} key={index} to={'/category/' + category.id} href={'/category/' + category.id}>{category.name}</MenuItem>
              ))}
            </NavDropdown>
          </Nav>
          <Search history={this.props.history}/>
          <Nav pullRight>
            <NavDropdown
              eventKey={2}
              title={i18next.t('lang')}
              id="basic-nav-dropdown"
              >
              <MenuItem eventKey={2.1} onClick={() => setLocale('en')}>English</MenuItem>
              <MenuItem eventKey={2.1} onClick={() => setLocale('ru')}>Русский</MenuItem>
            </NavDropdown>
          </Nav>
          {
            isAuth ?
            <Nav pullRight>
              <NavDropdown
                eventKey={3}
                title={ <Image width={20} src="/user.png" circle /> }
                id="basic-nav-dropdown"
                >
                <MenuItem componentClass={Link} eventKey={3.1} to="/profile" href="/profile">{i18next.t('menu_profile')}</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.2} onClick={() => logout()}>{i18next.t('menu_logout')}</MenuItem>
              </NavDropdown>
            </Nav>
            :
            <Nav pullRight>
              <NavItem componentClass={ Link } eventKey={1} to="/signin" href="/signin">
                {i18next.t('menu_signin')}
              </NavItem>
              <NavItem componentClass={ Link } eventKey={2} to="/signup" href="/signup">
                {i18next.t('menu_signup')}
              </NavItem>
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
