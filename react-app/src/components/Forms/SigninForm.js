import React, { Component } from 'react';
import i18next from 'i18next';
import Validator from 'validator';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Alert
} from 'react-bootstrap';

class SigninForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.serverErrors });
  }

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
      this.props.signin(this.state.data);
      this.setState({ loading: false });
    }
  };

  validate = data => {
    const errors = {};
    if(!Validator.isEmail(data.email)) errors.email = i18next.t('message_email');
    if(!data.password) errors.password = i18next.t('message_password');
    return errors;
  };

  render() {
    const { data, loading, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
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
            placeholder={i18next.t('password')}
            value={data.password}
            onChange={this.onChange} />
          {errors.password && <HelpBlock>{errors.password}</HelpBlock>}
        </FormGroup>
        { errors.server && <Alert bsStyle="danger">{errors.server}</Alert> }
        <Button type='submit' bsStyle='info' bsSize='large' className='modern-button' block disabled={!!loading}> {i18next.t('menu_signin')} </Button>
      </Form>
    );
  }
}

export default SigninForm;
