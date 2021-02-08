import React from 'react'
import style from '../styles/search-input.module.scss';
import { KEY_CODES } from '../constants/keycodes';
import { getQueryParam } from '../lib/utils'
import { withRouter } from 'next/router'

class SearchInput extends React.Component {
  state = {
    inputValue: ''
  }
  static getInitialProps({query}) {
    return {query};
  }
  constructor(...props) {
    super(...props);
    this.state.inputValue = getQueryParam('q') || '';
  }
  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({inputValue: this.props.value});
    }
  }
  componentDidMount () {
    this.input.focus();
  }
  handleInput = (e) => {
    let value = e.target.value;
    this.setState({ inputValue: value });
    this.props.onInput && this.props.onInput(value);
  }
  handleSubmit = () => {
    this.props.router.push(`/search-results?q=${this.state.inputValue}`);
    this.props.onSearch && this.props.onSearch(this.state.inputValue);
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
          value={this.state.inputValue}
          type="text"
          ref={input => this.input = input}
          className={style.textInput}
          onInput={this.handleInput}
          onKeyDown={this.handleKeyDown}
        />
        <button className={style.searchButton} onClick={this.handleSubmit} >Search</button>
      </div>
    )
  }
}

export default withRouter(SearchInput)