import React, { Component } from 'react';
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
          <p>Your account has been verefied.</p>
          <p><Link to="/profile">Go to profile</Link></p>
         </Alert>)}
        {!loading && !success && (<Alert bsStyle="danger">
          <p>Invalid token.</p>
          <p><Link to="/">Go to main page</Link></p>
        </Alert>)}
      </div>
    );
  }
}

export default ConfirmPage;
