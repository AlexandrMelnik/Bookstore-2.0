import React from 'react';
import { Alert } from 'react-bootstrap';

const ConfirmMessage = ({ isConfirm, isAuth }) => (
  <div className="confirm">
    {isAuth && !isConfirm &&
      <Alert bsStyle="warning">
        <p>Please check your email account and confirm the account</p>
      </Alert>
    }
  </div>
);

export default ConfirmMessage;
