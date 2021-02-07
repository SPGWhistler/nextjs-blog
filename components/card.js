import style from '../styles/card.module.scss'
import CardImage from './card-image';
import Link from 'next/link'
import { truncateText } from '../lib/utils'

export default function Card({result}) {
  return (
    <div className={style.quarterImageHorizontalCard}>
      <Link href={`/book/${result.id}`} >
        <a>
          <div>
            <CardImage
              result={result}
            />
          </div>
          <div className={style.metadata}>
            <div className={style.title}>
              {truncateText(result.title, 50)}
            </div>
            <div className={style.attribution}>
              Author: {result.attr}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}