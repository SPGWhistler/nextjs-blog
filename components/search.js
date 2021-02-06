import React from 'react'
import SearchInput from './search-input'
import Card from './card'
import SuggestionsModel from '../models/suggestions'

const suggestionsModel = new SuggestionsModel({ host: 'http://localhost:3001/search' });

export default class Search extends React.Component {
  state = {
    suggestions: []
  }
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
        <SearchInput onInput={this.onInput} />
        <section>
          {this.state.suggestions.map(suggestion => <Card suggestion={suggestion} />)}
        </section>
      </>
    )
  }
}
