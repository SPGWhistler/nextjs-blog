import React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'
import SearchModel from '../models/search'
import style from '../styles/search-results.module.scss'
import Pagination from '../components/pagination'
import { cleanPageNumber } from '../lib/utils'

const searchModel = new SearchModel({ host: `https://nesttest-1.spgwhistler.repl.co/v1/search` });

/**
 * The search results page.
 * @param {string} q The search query to return results for.
 * @param {string} page The page number to return as a string.
 */
export default class SearchResults extends React.Component {
  state = {
    results: [],
    totalPages: 0
  }
  static getInitialProps({query}) {
    return {query};
  }
  componentDidUpdate = async (prevProps) => {
    if (
      this.props.query.q !== prevProps.query.q ||
      this.props.query.page !== prevProps.query.page
    ) {
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
      let results = await searchModel.getResults(this.props.query.q, cleanPageNumber(this.props.query.page));
      debugger;
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
          <Pagination query={this.props.query.q} currentPage={cleanPageNumber(this.props.query.page)} totalPages={this.state.totalPages} />
        }
      </Layout>
    )
  }
}
