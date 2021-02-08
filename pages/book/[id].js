import React from 'react'
import Layout from '../../components/layout'
import styles from '../../styles/book.module.scss'
import BookModel from '../../models/book'
import CardImage from '../../components/card-image'
import Author from '../../components/author'
import Description from '../../components/description'
import Title from '../../components/title'

const bookModel = new BookModel({ host: 'http://localhost:3001/v1/books' });

export default class Book extends React.Component {
  state = {
    result: {}
  }
  static getInitialProps({query}) {
    return {query};
  }
  componentDidUpdate = async (prevProps) => {
    if (this.props.query.id !== prevProps.query.id) {
      await this.getResults();
    }
  }
  componentDidMount = async () => {
    await this.getResults();
  }
  getResults = async () => {
    if (!(this.props.query && this.props.query.id && this.props.query.id.trim())) {
			return this.setState({ result: {} });
    }
    try {
      let result = await bookModel.getResult(this.props.query.id);
      this.setState({
        result
      });
    } catch (err) {
      this.setState({ result: {} });
      console.error('Got an error fetching book result', err);
    }
  }
  render () {
    return (
      <Layout>
        {Object.keys(this.state.result).length > 0 &&
          <div className={styles.book}>
            <Title title={this.state.result.title} />
            <div className={styles.row1}>
              <div className={styles.bookCover}>
                <CardImage
                  url={this.state.result.large_image}
                  alt={this.state.result.title}
                  width={3}
                  height={4}
                  layout='responsive'
                />
              </div>
              {this.state.result.desc.length > 0 &&
                <Description className={styles.bookDesc} text={this.state.result.desc} />
              }
            </div>
            {this.state.result.authors.length > 0 &&
              <section className={styles.authors}>
                {this.state.result.authors.map((author) => <Author author={author} key={author.author_id} />)}
              </section>
            }
          </div>
        }
      </Layout>
    )
  }
}
