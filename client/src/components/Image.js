function Image({ image }) {
  console.log(image);
  return <img src={image.url}></img>;
}

export default Image;
