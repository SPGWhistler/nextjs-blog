import Image from 'next/image'

export default function CardImage({url, alt, width, height, layout, unoptimized}) {
  unoptimized = (unoptimized === false) ? false : true;
  return (
    <Image
      src={url}
      alt={alt || ''}
      width={width}
      height={height}
      layout={layout || 'responsive'}
      unoptimized={unoptimized}
    />
  );
}