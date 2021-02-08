import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import Link from 'next/link'
import Search from '../components/search'

export const siteTitle = 'GoodReads Quick Search'

/**
 * This is a wrapper so that each page can have the same look and feel.
 * @param {array} children The children components to display.
 * @param {bool} home If this is the home page or not.
 */
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A sample app to quickly search the GoodReads db."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
        {siteTitle}
        </>
      </header>
      <Search></Search>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
