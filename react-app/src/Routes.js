import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import UserRoute from './containers/routes/UserRoute';
import GuestRoute from './containers/routes/GuestRoute';

import HomePage from './containers/HomeContainer';
import AboutUsPage from './components/AboutUsPage';
import SigninPage from './components/SigninPage';
import SignupPage from './components/SignupPage';
import ProfilePage from './components/ProfilePage';
import ConfirmPage from './containers/ConfirmContainer';
import SearchPage from './containers/SearchContainer';
import BookDetailsPage from './containers/BookDetailsContainer';
import CartPage from './containers/CartPageContainer';
import CategoriesPage from './containers/CategoriesPageContainer';

const Routes = ({ location }) => (
  <Grid>
    <Route location={ location } exact path="/" component={ HomePage } />
    <Route location={ location } path="/about" component={ AboutUsPage } />
    <Route location={ location } path="/book/:id" component={ BookDetailsPage } />
    <Route location={ location } path="/category/:id" component={ CategoriesPage } />
    <Route location={ location } path="/cart" component={ CartPage } />
    <GuestRoute location={ location } path="/signin" component={ SigninPage } />
    <Route location={ location } path="/search/:query" component={ SearchPage } />
    <GuestRoute location={ location } path="/signup" component={ SignupPage } />
    <UserRoute location={ location } path="/profile" component={ ProfilePage }/>
    <UserRoute location={ location } path="/confirm/:token" component={ ConfirmPage }/>
  </Grid>
);

export default Routes;
