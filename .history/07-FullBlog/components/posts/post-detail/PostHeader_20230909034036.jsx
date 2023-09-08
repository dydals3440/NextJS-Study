function PostHeader(props) {
  const { title, image } = props;
  return (
    <header>
      <h1>{title}</h1>
      <Image />
    </header>
  );
}
