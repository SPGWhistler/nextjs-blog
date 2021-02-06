import style from '../styles/card.module.scss'
import CardImage from './card-image';
import Link from 'next/link'

//import { Truncate } from '@cube/blocks';

export default function Card({suggestion}) {
  return (
    <div className={style.quarterImageHorizontalCard}>
      <Link href={`/posts/${suggestion.id}`} >
        <a>
          <div>
            <CardImage
              suggestion={suggestion}
            />
          </div>
          <div className={style.metadata}>
            <div className={style.title}>
              {suggestion.best_book.title}
            </div>
            <div className={style.attribution}>
              {suggestion.best_book.author.name}
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

/*
export default function Card(asset, cardClass, ...props) {
  return (
    <div class={cx(style.quarterImageHorizontalCard, cardClass)}>
      <a
        href={getArticleUrl(asset)}
        rel={isExternal(asset) && 'noreferrer noopener'}
        target={isExternal(asset) && '_blank'}
      >
        <CardImage
          asset={asset}
          displayDuration
          qeId={qeId}
          {...props}
        />
        <div class={style.metadata}>
          <div class={style.title}>
            <Truncate
              method="multipleLines"
              lines={2}
            >
              {asset.title}
            </Truncate>
          </div>
          <div class={style.attribution} qid={qeId + '-attribution'}>
            {getAttribution(asset)}
          </div>
          <div class={style.summary} qid={qeId + '-summary'}>
            <Truncate
              method="multipleLines"
              lines={2}
            >
              {asset.summary}
            </Truncate>
          </div>
        </div>
      </a>
    </div>
  );
}
*/