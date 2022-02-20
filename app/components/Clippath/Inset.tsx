import ListItem from "../ListItem";

const Inset = () => {
  return (
    <ListItem
      el={
        <div className="box">
          <div className="inset text-xs">clip-path: inset(20px)</div>
        </div>
      }
      code={`.root {
  background-color: #e3c95d;
}
          
.inset {
  height: 10rem;
  width: 100%;
  clip-path: inset(20px);
  background-color: #fff;
}`}
    />
  );
};

export default Inset;
