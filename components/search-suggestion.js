import style from '../styles/search-suggestion.module.scss'
import Link from 'next/link'

//import { Truncate } from '@cube/blocks';

export default function SearchSuggestion({suggestion}) {
  return (
    <div>
      <Link href={`/search?q=${suggestion}`} >
        <a>
          <div className={style.title}>
            {suggestion}
          </div>
        </a>
      </Link>
    </div>
  );
}