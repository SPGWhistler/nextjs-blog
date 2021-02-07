import Layout from '../../components/layout'
import styles from '../../styles/book.module.scss'
import { useRouter } from 'next/router'

export default function Book() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div className={styles.desc}>
      {id}
      </div>
    </Layout>
  )
}
