import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Search from '../components/search'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Search></Search>
    </Layout>
  )
}
