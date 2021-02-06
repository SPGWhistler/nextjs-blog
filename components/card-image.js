import style from '../styles/card-image.module.scss'
import Image from 'next/image'

export default function CardImage({suggestion}) {
  return (
    <Image
      src={suggestion.best_book.image_url}
      alt="no alt"
      width={50}
      height={50}
      layout="responsive"
    />
  );
}