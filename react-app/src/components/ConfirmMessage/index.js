import React from 'react';
import i18next from 'i18next';
import { Alert } from 'react-bootstrap';


const ConfirmMessage = ({ isConfirm, isAuth }) => (
  <div className="confirm">
    {isAuth && !isConfirm &&
      <Alert bsStyle="warning">
        <p>{i18next.t('confirm_email_message')}</p>
      </Alert>
    }
  </div>
);

export default ConfirmMessage;
