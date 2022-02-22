import ListItem from "../ListItem";

const Image = () => {
  const img = "http://farm3.static.flickr.com/2693/4053077192_b2fde21ea4.jpg";

  return (
    <>
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
      <ListItem
        el={
          <div className="box-white p-10 flex items-center justify-around">
            <img className="img-rhombus" src={img} alt="img2" />
            <img className="img-star" src={img} alt="img2" />
            <img className="img-arrow" src={img} alt="img2" />
          </div>
        }
        code={`.img-rhombus {
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}

.img-star {
  clip-path: polygon(45% 3%, 76% 99%, 2% 29%, 95% 29%, 15% 99%);
}

.img-arrow {
  clip-path: polygon(
    0% 20%,
    50% 20%,
    50% 0%,
    100% 50%,
    50% 100%,
    50% 80%,
    0% 80%
  );
}`}
      />
    </>
  );
};

export default Image;
