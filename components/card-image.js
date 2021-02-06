import style from '../styles/card-image.module.scss'
import Image from 'next/image'

export default function CardImage({suggestion}) {
  return (
    <Image
      src={suggestion.imageSrc}
      alt={suggestion.imageAlt}
      width={50}
      height={50}
      layout="responsive"
    />
  );
}