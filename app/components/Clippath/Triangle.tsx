import ListItem from "../ListItem";

const Triangle = () => {
  return (
    <ListItem
      el={
        <div className="box flex justify-center items-center p-5">
          <div className="triangle"></div>

          <div className="text-xs">
            clip-path: polygon(0 100%, 50% 0, 100% 100%);
          </div>
        </div>
      }
      code={`.root {
  background-color: #e3c95d;
}
          
.triangle {
  background-color: #fff;
  width: 10rem;
  height: 10rem;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
}`}
    />
  );
};

export default Triangle;
