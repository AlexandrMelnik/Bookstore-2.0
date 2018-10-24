import React from 'react';
import i18next from 'i18next';
import { Col, Panel } from 'react-bootstrap';
import SignupForm from '../../containers/SignupFormContainer';
import './index.css';

const SignupPage = () => (
  <Col md={4} mdOffset={4}>
    <Panel>
      <Panel.Body>
        <h4>
          {i18next.t('menu_signup')}
        </h4>
        <hr />
        <SignupForm />
      </Panel.Body>
    </Panel>
  </Col>
);

export default SignupPage;
