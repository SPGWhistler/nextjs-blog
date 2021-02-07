import Layout from '../components/layout'
import styles from '../styles/index.module.scss'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div className={styles.desc}>
        Start typing above to look for books.
      </div>
    </Layout>
  )
}
