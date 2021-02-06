import style from '../styles/card-image.module.scss'
import Image from 'next/image'

export default function CardImage({asset}) {
  return (
    <Image
      src={asset.imageSrc}
      alt={asset.imageAlt}
      width={50}
      height={50}
      layout="responsive"
    />
  );
}