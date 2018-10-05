import React, { Component } from 'react';
import i18next from 'i18next';
import { Col, Panel } from 'react-bootstrap';
import SignupForm from '../Forms/SignupForm';
import './index.css';

class SignupPage extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push('/profile'));

  render () {
    return(
      <Col md={4} mdOffset={4}>
        <Panel>
          <Panel.Body>
            <h4>
              {i18next.t('menu_signup')}
            </h4>
            <hr />
            <SignupForm submit={this.submit} />
          </Panel.Body>
        </Panel>
      </Col>
    );
  }
}

export default SignupPage;
