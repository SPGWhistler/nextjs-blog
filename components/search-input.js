import React from 'react'
import style from '../styles/search-input.module.scss';
import { KEY_CODES } from '../constants/keycodes';

export default class SearchInput extends React.Component {
  state = {
    inputValue: ''
  }
  componentDidMount () {
    this.input.focus();
  }
  openSuggestions() {

  }
  closeSuggestions() {

  }
  handleInput = (e) => {
    let value = e.target.value;
    this.setState({ inputValue: value });
    this.props.onInput && this.props.onInput(value);
  }
  handleSubmit = () => {

  }
	handleKeyDown = (e) => {
		let preventDefault = true;
		if (e.keyCode === KEY_CODES.CARRIAGE_RETURN) {
			this.handleSubmit();
		}
		else {
			preventDefault = false;
		}
		preventDefault && e.preventDefault();
	}

  render () {
    return (
      <div className={style.wrapper}>
        <input
          type="text"
          ref={input => this.input = input}
          className={style.textInput}
          onInput={this.handleInput}
          onKeyDown={this.handleKeyDown}
        />
        <button className={style.searchButton}>Search</button>
      </div>
    )
  }
}