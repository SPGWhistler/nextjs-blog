import React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'
import SearchModel from '../models/search'
import style from '../styles/search-results.module.scss'
import Pagination from '../components/pagination'

const searchModel = new SearchModel({ host: 'http://localhost:3001/v1/search' });

//TODO Add in pagination

export default class SearchResults extends React.Component {
  state = {
    results: [],
    totalPages: 0
  }
  static getInitialProps({query}) {
    return {query};
  }
  componentDidUpdate = async (prevProps) => {
    if (this.props.query.q !== prevProps.query.q) {
      await this.getResults();
    }
  }
  
  componentDidMount = async () => {
    await this.getResults();
  }
  getResults = async () => {
    if (!(this.props.query && this.props.query.q && this.props.query.q.trim())) {
			return this.setState({ results: [] });
    }
    try {
      let results = await searchModel.getResults(this.props.query.q);
      this.setState({
        results: results.results,
        totalPages: results.totalPages,
      });
    } catch (err) {
      this.setState({ results: [] });
      console.error('Got an error fetching search results', err);
    }
  }
  render () {
    return (
      <Layout>
        {this.state.results.length > 0 &&
          <section className={style.results}>
            {this.state.results.map(result => <Card result={result} key={result.id} />)}
          </section>
        }
        {this.state.results.length > 0 &&
          <Pagination />
        }
      </Layout>
    )
  }
}
