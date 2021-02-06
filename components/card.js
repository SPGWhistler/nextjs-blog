import Layout, { siteTitle } from './layout'
import utilStyles from '../styles/utils.module.css'
import style from '../styles/card.module.scss'
import CardImage from './card-image';
import Link from 'next/link'

//import cx from 'classnames';

//import style from './style.less';

//import CardImage from '../../pieces/card-image';
//import { getArticleUrl, isExternal, getAttribution } from '../../../lib/utils';

//import { trackingProvider, trackProps, getTrackingAttributesForAsset, STANDARD_KEYS } from '@cube/track';
//import { Truncate } from '@cube/blocks';

export default function Card({asset}) {
  return (
    <div className={style.quarterImageHorizontalCard}>
      <Link href={`/posts/${asset.id}`} >
        <a>
          <div>
            <CardImage
              asset={asset}
            />
          </div>
          <div className={style.metadata}>
            <div className={style.title}>
              {asset.title}
            </div>
            <div className={style.attribution}>
              {asset.attrib}
            </div>
            <div className={style.summary}>
              {asset.summary}
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