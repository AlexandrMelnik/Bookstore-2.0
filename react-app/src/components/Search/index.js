import React, { Component } from 'react';
import i18next from 'i18next';
import {
  Navbar,
  FormGroup,
  FormControl
} from 'react-bootstrap';

class Search extends Component {
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      //TODO This test
    }
  }

  render() {
    return (
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl
            className="modern-search"
            type="text"
            placeholder={i18next.t('search_book')}
            onKeyPress={this.handleKeyPress}
            />
        </FormGroup>
      </Navbar.Form>
    );
  }
}

export default Search;