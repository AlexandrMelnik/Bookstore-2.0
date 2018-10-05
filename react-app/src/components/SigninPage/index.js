import React, { Component } from 'react';
import i18next from 'i18next';
import { Col, Panel } from 'react-bootstrap';
import SigninForm from '../Forms/SigninForm';
import './index.css';

class SigninPage extends Component {
  submit = data =>
    this.props.signin(data).then(() => this.props.history.push('/profile'));

  render () {
    return(
      <Col md={4} mdOffset={4}>
        <Panel>
          <Panel.Body>
            <h4>
              {i18next.t('menu_signin')}
            </h4>
            <hr />
            <SigninForm submit={this.submit} />
          </Panel.Body>
        </Panel>
      </Col>
    );
  }
}

export default SigninPage;
