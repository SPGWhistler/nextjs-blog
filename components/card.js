import style from '../styles/card.module.scss'
import CardImage from './card-image';
import Link from 'next/link'

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
              {result.title}
            </div>
            <div className={style.attribution}>
              {result.attr}
            </div>
            <div className={style.summary}>
             no summary
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}