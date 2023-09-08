import Image from 'next/image';

function PostHeader(props) {
  const { title, image } = props;
  return (
    <header>
      <h1>{title}</h1>
      <Image src={image} />
    </header>
  );
}
