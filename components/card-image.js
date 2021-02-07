import style from '../styles/card-image.module.scss'
import Image from 'next/image'

export default function CardImage({result}) {
  return (
    <Image
      src={result.image}
      alt="no alt"
      width={3}
      height={4}
      layout="responsive"
    />
  );
}