import style from '../styles/search-suggestion.module.scss'
import Link from 'next/link'
import { truncateText } from '../lib/utils'

/**
 * Show a search suggestion link.
 * @param {string} suggestion The search suggestion text to show.
 * @param {function} onSearch A function to call when this suggestion is clicked.
 */
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