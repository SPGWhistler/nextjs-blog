import Image from 'next/image'

/**
 * Display an image using Next.js's Image component.
 * @param {string} url The image url.
 * @param {string} alt The alt text for the image. Optional.
 * @param {number} width The width of the image, in pixels, with no unit.
 * @param {number} height The height of the image, in pixels, with no unit.
 * @param {string} layout The layout to use. Optional.
 * @param {bool} unoptimized If this image should not be optimized by next.js. Optional.
 */
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