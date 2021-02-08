import Link from 'next/link'

/**
 * A simple page number.
 * @param {string} value The page number value.
 * @param {string} query The query to use in the link.
 * @param {bool} link If this page number should be a link or not.
 */
export default function PageNumber({value, query, link}) {
  return (
    <>
    {link
      ? <Link href={`/search-results?q=${query}&page=${value}`}>
          <a>
            {value}
          </a>
        </Link>
      : <>
          {value}
        </>
    }
    </>
  );
}