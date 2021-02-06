import React from 'react'
import SearchInput from './search-input'
import Card from './card'

export default class Search extends React.Component {
  state = {
    suggestions: []
  }
  onInput = (value) => {
    let suggestions = [
      {
        title: `${value}`,
        attrib: 'test attrib',
        imageSrc: '/images/profile.jpg',
        imageAlt: 'test image alt',
        summary: 'test summary',
        date: '2020-01-01'
      }
    ];
    this.setState({ suggestions });

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
