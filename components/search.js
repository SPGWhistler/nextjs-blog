import React from 'react'
import style from '../styles/search.module.scss'
import SearchInput from './search-input'
import SearchSuggestion from './search-suggestion'
import SuggestionsModel from '../models/suggestions'

const suggestionsModel = new SuggestionsModel({ host: 'http://localhost:3001/search-suggest' });

export default class Search extends React.Component {
  state = {
    suggestions: []
  }
  debounce(func) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func(...args);
      }, 250);
    };
  };
  onInput = async (value) => {
    if (!(value && value.trim())) {
			return this.setState({ suggestions: [] });
    }
    try {
      let res = await suggestionsModel.getSuggestions(value);
      this.setState({
        suggestions: res
      });
    } catch (err) {
      this.setState({ suggestions: [] });
      console.error('Got an error fetching search suggestions', err);
    }
  }
  render () {
    return (
      <>
        <SearchInput onInput={this.debounce(this.onInput)} />
        {this.state.suggestions.length > 0 &&
          <section className={style.suggestions}>
            {this.state.suggestions.map(suggestion => <SearchSuggestion suggestion={suggestion} />)}
          </section>
        }
      </>
    )
  }
}
