import React, { Component } from 'react';
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
              Signup
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
