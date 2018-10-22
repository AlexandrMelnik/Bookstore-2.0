import React, { Component } from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

class ConfirmPage extends Component {
  state = {
    loading: true,
    success: false
  }

  componentDidMount() {
    this.props.confirm(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  render() {
    const { loading, success } = this.state;
    return (
      <div className="confirm">
        {loading && (<Alert bsStyle="info"> Checking... </Alert>)}
        {!loading && success && (<Alert bsStyle="success">
          <p>{i18next.t('confirm_success')}</p>
          <p><Link to="/profile">{i18next.t('go_to_profile')}</Link></p>
         </Alert>)}
        {!loading && !success && (<Alert bsStyle="danger">
          <p>{i18next.t('confirm_error')}</p>
          <p><Link to="/">{i18next.t('go_to_home')}</Link></p>
        </Alert>)}
      </div>
    );
  }
}

export default ConfirmPage;
