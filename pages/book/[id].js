import React from 'react'
import Layout from '../../components/layout'
import styles from '../../styles/book.module.scss'
import BookModel from '../../models/book'
import BookImage from '../../components/book-image';

const bookModel = new BookModel({ host: 'http://localhost:3001/book' });

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
  //const router = useRouter();
  //const { id } = router.query;
  render () {
    return (
      <Layout>
        {Object.keys(this.state.result).length > 0 &&
          <div className={styles.desc}>
            <BookImage result={this.state.result} />
          </div>
        }
      </Layout>
    )
  }
}
