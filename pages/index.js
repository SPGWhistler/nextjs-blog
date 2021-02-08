import Layout from '../components/layout'
import styles from '../styles/index.module.scss'

/**
 * The home page.
 */
export default function Home() {
  return (
    <Layout home>
      <div className={styles.desc}>
        Start typing above to look for books.
      </div>
    </Layout>
  )
}
