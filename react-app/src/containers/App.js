import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from '../Routes';
import Header from './HeaderContainer';
import Footer from '../components/Footer';

const App = ({ location, search_books }) => (
  <div className="app">
    <Header />
    <Routes location={ location } />
    <Footer />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

function mapStateToProps(state) {
  return {
    locale: state.locale
  }
}

export default connect(mapStateToProps, null)(App);
