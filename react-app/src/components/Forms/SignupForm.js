import React, { Component } from 'react';
import Validator from 'validator';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Checkbox,
  Button,
  Alert
} from 'react-bootstrap';

class SignupForm extends Component {
  state = {
    data: {
      username: '',
      email: '',
      password: ''
    },
    loading: '',
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if(Object.keys( errors ).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data)
        .catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
    }
  };

  validate = data => {
    const errors = {};
    if(!data.username) errors.username = 'Enter your name';
    if(!Validator.isEmail(data.email)) errors.email = 'Enter your e-mail address';
    if(!data.password) errors.password = 'Enter your account password';
    return errors;
  };

  render() {
    const { data, loading, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup bsSize="large" validationState={ errors.username && 'error' }>
          <ControlLabel> Your name </ControlLabel>
          <FormControl
            type='text'
            name='username'
            placeholder='Your name'
            value={data.username}
            onChange={this.onChange} />
          {errors.username && <HelpBlock>{errors.username}</HelpBlock>}
        </FormGroup>
        <FormGroup bsSize="large" validationState={ errors.email && 'error' }>
          <ControlLabel> Email </ControlLabel>
          <FormControl
            type='email'
            name='email'
            placeholder='example@example.com'
            value={data.email}
            onChange={this.onChange} />
          {errors.email && <HelpBlock>{errors.email}</HelpBlock>}
        </FormGroup>
        <FormGroup bsSize="large" validationState={ errors.password && 'error' }>
          <ControlLabel> Password </ControlLabel>
          <FormControl
            type='password'
            name='password'
            placeholder='Create a password'
            value={data.password}
            onChange={this.onChange} />
          {errors.password && <HelpBlock>{errors.password}</HelpBlock>}
        </FormGroup>
        <FormGroup>
          <Checkbox>
            * I agree with the terms of use of the service, as well as with the transfer and processing of my data
          </Checkbox>
        </FormGroup>
        { errors.server && <Alert bsStyle="danger">{errors.server}</Alert> }
        <Button type='submit' bsStyle='info' bsSize='large' className='modern-button' block disabled={!!loading}> Signup </Button>
      </Form>
    );
  }
}

export default SignupForm;
