import Link from 'next/link'

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