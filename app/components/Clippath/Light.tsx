import ListItem from "../ListItem";

const Light = () => {
  return (
    <ListItem
      el={
        <div className="box-black ">
          <div className="picture" />
        </div>
      }
      code={`.background {
  width: 480px;
  height: 500px;
  background: url("../preview.jpg");
  background-attachment: fixed;
  background-size: 150px 100px;
  clip-path: circle(10%);
  animation: clipmove 8s ease-in-out infinite;
}

@keyframes clipmove {
  0%,
  100% {
    clip-path: circle(10% at 0 0);
  }

  50% {
    clip-path: circle(30% at 50% 50%);
  }

  25% {
    clip-path: circle(60% at 100% 100%);
  }
}`}
    />
  );
};

export default Light;
