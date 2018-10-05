import React, { Component } from 'react';
import i18next from 'i18next';
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
    if(!data.username) errors.username = i18next.t('message_username');
    if(!Validator.isEmail(data.email)) errors.email = i18next.t('message_email');
    if(!data.password) errors.password = i18next.t('message_password');
    return errors;
  };

  render() {
    const { data, loading, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup bsSize="large" validationState={ errors.username && 'error' }>
          <ControlLabel> {i18next.t('username')} </ControlLabel>
          <FormControl
            type='text'
            name='username'
            placeholder={i18next.t('username')}
            value={data.username}
            onChange={this.onChange} />
          {errors.username && <HelpBlock>{errors.username}</HelpBlock>}
        </FormGroup>
        <FormGroup bsSize="large" validationState={ errors.email && 'error' }>
          <ControlLabel> {i18next.t('email')} </ControlLabel>
          <FormControl
            type='email'
            name='email'
            placeholder='example@example.com'
            value={data.email}
            onChange={this.onChange} />
          {errors.email && <HelpBlock>{errors.email}</HelpBlock>}
        </FormGroup>
        <FormGroup bsSize="large" validationState={ errors.password && 'error' }>
          <ControlLabel> {i18next.t('password')} </ControlLabel>
          <FormControl
            type='password'
            name='password'
            placeholder={i18next.t('create_password')}
            value={data.password}
            onChange={this.onChange} />
          {errors.password && <HelpBlock>{errors.password}</HelpBlock>}
        </FormGroup>
        <FormGroup>
          <Checkbox>
            * {i18next.t('terms')}
          </Checkbox>
        </FormGroup>
        { errors.server && <Alert bsStyle="danger">{errors.server}</Alert> }
        <Button type='submit' bsStyle='info' bsSize='large' className='modern-button' block disabled={!!loading}> {i18next.t('menu_signup')} </Button>
      </Form>
    );
  }
}

export default SignupForm;
