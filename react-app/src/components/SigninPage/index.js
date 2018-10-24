import React from 'react';
import i18next from 'i18next';
import { Col, Panel } from 'react-bootstrap';
import SigninForm from '../../containers/SigninFormContainer';
import './index.css';

const SigninPage = () => (
  <Col md={4} mdOffset={4}>
    <Panel>
      <Panel.Body>
        <h4>
          {i18next.t('menu_signin')}
        </h4>
        <hr />
        <SigninForm />
      </Panel.Body>
    </Panel>
  </Col>
);

export default SigninPage;
