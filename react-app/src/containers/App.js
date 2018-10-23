import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllBooks } from '../redux/actions/books';
import { getCategories } from '../redux/actions/categories';
import ScrollUpButton from "react-scroll-up-button";
import PropTypes from 'prop-types';
import Routes from '../Routes';
import Header from './HeaderContainer';
import Footer from '../components/Footer';


class App extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getAllBooks();
  }

  render() {
    const { location, history } = this.props;
    return (
      <div className="app">
        <Header history={history} />
        <ScrollUpButton />
        <Routes location={ location } />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    categories_id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
  getAllBooks: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  getCategories: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    books: state.books.books,
    loading: state.books.loading,
    locale: state.locale
  }
}

export default connect(mapStateToProps, { getAllBooks, getCategories })(App);
