import Image from 'next/image';

import classes from './PostHeader.module.css';

function PostHeader(props) {
  const { title, image } = props;
  return (
    <header>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={15} />
    </header>
  );
}
