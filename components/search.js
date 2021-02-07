import React from 'react'
import style from '../styles/search.module.scss'
import SearchInput from './search-input'
import SearchSuggestion from './search-suggestion'
import SearchModel from '../models/search'
import { debounce } from '../lib/utils'

const searchModel = new SearchModel({ host: 'http://localhost:3001/search-suggest' });

export default class Search extends React.Component {
  state = {
    suggestions: []
  }
  onInput = async (value) => {
    if (!(value && value.trim())) {
			return this.setState({ suggestions: [] });
    }
    try {
      let res = await searchModel.getResults(value);
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
        <SearchInput onInput={debounce(this.onInput)} />
        {this.state.suggestions.length > 0 &&
          <section className={style.suggestions}>
            {this.state.suggestions.map((suggestion, id) => <SearchSuggestion suggestion={suggestion} key={id} />)}
          </section>
        }
      </>
    )
  }
}
