import Image from 'next/image'

//TODO Convert CardImage to just work for both of these cases.
export default function BookImage({result}) {
  return (
    <Image
      src={result.large_image}
      alt="no alt"
      width={50}
      height={70}
      layout="responsive"
      unoptimized={true}
    />
  );
}