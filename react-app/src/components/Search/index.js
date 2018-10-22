import React, { Component } from 'react';
import i18next from 'i18next';
import ReactAutocomplete  from 'react-autocomplete';
import {
  Navbar,
  FormGroup,
  FormControl
} from 'react-bootstrap';

class Search extends Component {
  state = {
    text: ''
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      if(e.target.value) {
        this.props.history.push('/search/' + this.state.text);
      }
    }
  }

  render() {
    const { books } = this.props;

    const inputProps = {
      onKeyPress: this.handleKeyPress,
      placeholder: i18next.t('search_book'),
      className: "modern-search form-control"
    }

    const menuStyleProps = {
      marginTop: '10px',
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2px 0',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '50%',
      zIndex: 255
    }

    return (
      <Navbar.Form pullLeft>
        <FormGroup>
          <ReactAutocomplete
            items={books}
            shouldItemRender={(item, value) =>
              item.title.toLowerCase().indexOf(value.toLowerCase())  > -1
            }
            getItemValue={item => item.title}
            renderItem={(item, highlighted) =>
             <div key={item.id} className="autocomplete-item">
               <div
                 className="autocomplete-item-select"
                 style={{ background: highlighted ? '#eee' : 'white'}}>
                 {item.title}
               </div>
            </div>
          }
          inputProps={inputProps}
          menuStyle={menuStyleProps}
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
          onSelect={text => this.setState({ text })} />
        </FormGroup>
      </Navbar.Form>
    );
  }
}

export default Search;
