import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import UserRoute from './containers/routes/UserRoute';
import GuestRoute from './containers/routes/GuestRoute';

import HomePage from './containers/HomeContainer';
import SigninPage from './containers/SigninContainer';
import SignupPage from './containers/SignupContainer';
import ProfilePage from './components/ProfilePage';
import ConfirmPage from './containers/ConfirmContainer';

import BookDetailsPage from './containers/BookDetailsContainer';

const Routes = ({ location }) => (
  <Grid>
    <Route location={ location } exact path="/" component={ HomePage } />
    <Route location={ location } exact path="/book/:id" component={ BookDetailsPage } />
    <GuestRoute location={ location } path="/signin" component={ SigninPage } />
    <GuestRoute location={ location } path="/signup" component={ SignupPage } />
    <UserRoute location={ location } path="/profile" component={ ProfilePage }/>
    <UserRoute location={ location } path="/confirm/:token" component={ ConfirmPage }/>
  </Grid>
);

Routes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default Routes;
