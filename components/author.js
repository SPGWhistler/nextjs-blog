import style from '../styles/author.module.scss'
import CardImage from './card-image';
import { truncateText } from '../lib/utils'

/**
 * Display an author card.
 * @param {} author The author object to display.
 */
export default function Author({author}) {
  return (
    <div className={style.card}>
      <a>
        <div className={style.image}>
          <CardImage
            url={author.author_image}
            alt={author.author_name}
            width={3}
            height={4}
            layout='responsive'
          />
        </div>
        <div className={style.metadata}>
          <div className={style.title}>
            {truncateText(author.author_name, 50)}
          </div>
        </div>
      </a>
    </div>
  );
}