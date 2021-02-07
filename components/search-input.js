import React from 'react'
import style from '../styles/search-input.module.scss';
import { KEY_CODES } from '../constants/keycodes';
import { getQueryParam } from '../lib/utils'

export default class SearchInput extends React.Component {
  state = {
    inputValue: ''
  }
  static getInitialProps({query}) {
    return {query};
  }
  constructor(...props) {
    super(...props);
    //this.state.inputValue = getQueryParam('q') || '';
  }
  componentDidUpdate(prevProps) {
    //if (this.props.query) {
    //  this.props;
    //  prevProps;
    //  debugger;
    //}
    /*
    let q = getQueryParam('q');
    if (q && this.state.inputValue !== q) {
      this.setState({inputValue: q});
    }
    if (this.props.query.q !== prevProps.query.q) {
      await this.getResults();
    }
    */
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
    this.props.history.push(`/search-results?q=${this.state.inputValue}`);
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
        <button className={style.searchButton}>Search</button>
      </div>
    )
  }
}