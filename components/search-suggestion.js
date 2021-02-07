import style from '../styles/search-suggestion.module.scss'
import Link from 'next/link'

export default function SearchSuggestion({suggestion}) {
  return (
    <div className={style.suggestion}>
      <Link href={`/search-results?q=${suggestion}`} >
        <a>
          <div className={style.title}>
            {suggestion}
          </div>
        </a>
      </Link>
    </div>
  );
}