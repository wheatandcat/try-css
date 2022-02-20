import ListItem from "../ListItem";

const Circle = () => {
  return (
    <ListItem
      el={
        <div className="box">
          <div className="circle text-xs">circle(80px at 50% 50%);</div>
        </div>
      }
      code={`.root {
  background-color: #e3c95d;
}
          
.circle {
  height: 15rem;
  width: 100%;
  clip-path: circle(80px at 50% 50%);
  background-color: #fff;
}`}
    />
  );
};

export default Circle;
