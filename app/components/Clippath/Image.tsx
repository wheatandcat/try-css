import ListItem from "../ListItem";

const Image = () => {
  const img = "http://farm3.static.flickr.com/2693/4053077192_b2fde21ea4.jpg";

  return (
    <ListItem
      el={
        <div className="box-white p-10 flex items-center justify-around">
          <img className="clip-img" src={img} alt="img1" />
          <img className="clip-img img-triangle" src={img} alt="img2" />
          <img className="clip-img img-circle" src={img} alt="img3" />
        </div>
      }
      code={`.img-triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.img-circle {
  clip-path: circle(30%);
}`}
    />
  );
};

export default Image;
