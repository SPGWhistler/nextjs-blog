import React from 'react'
import style from '../styles/search.module.scss'
import SearchInput from './search-input'
import SearchSuggestion from './search-suggestion'
import SearchModel from '../models/search'
import { debounce } from '../lib/utils'

const searchModel = new SearchModel({ host: `https://nesttest.spgwhistler.repl.co/v1/search-suggest` });

/**
 * Display a search component (input box, button, and search suggestions).
 */
export default class Search extends React.Component {
  state = {
    suggestions: [],
    query: ''
  }
  clearSuggestions() {
    this.setState({ suggestions: [] });
  }
  onInput = async (value) => {
    this.setState({'query': value});
    if (!(value && value.trim())) {
      return this.clearSuggestions();
    }
    try {
      let res = await searchModel.getResults(value);
      this.setState({
        suggestions: res
      });
    } catch (err) {
      this.clearSuggestions();
      console.error('Got an error fetching search suggestions', err);
    }
  }
  onSearch = (value) => {
    this.clearSuggestions();
    this.setState({query: value});
  }
  render () {
    return (
      <>
        <SearchInput value={this.state.query} onInput={debounce(this.onInput)} onSearch={this.onSearch} />
        {this.state.suggestions.length > 0 &&
          <section className={style.suggestions}>
            {this.state.suggestions.map((suggestion, id) => <SearchSuggestion suggestion={suggestion} key={id} onSearch={this.onSearch} />)}
          </section>
        }
      </>
    )
  }
}
