import style from '../styles/search-suggestion.module.scss'
import Link from 'next/link'
import { truncateText } from '../lib/utils'

export default function SearchSuggestion({suggestion, onSearch}) {
  const handleClick = () => {
    onSearch && onSearch(suggestion);
  };

  return (
    <div className={style.suggestion}>
      <Link href={`/search-results?q=${suggestion}`} >
        <a onClick={handleClick} >
          <div className={style.title}>
            {truncateText(suggestion, 60)}
          </div>
        </a>
      </Link>
    </div>
  );
}