import ListItem from "../ListItem";

const Ribbon = () => {
  return (
    <ListItem
      el={
        <div className="box-white relative">
          <div className="ribbon font-bold">
            <span className="pr-2 text-red-400">Pick up!</span>
          </div>
          <div className="text-xs pt-20 pl-10">
            clip-path: polygon(0 0, 100% 0, 100% 100%);
          </div>
        </div>
      }
      code={`.ribbon {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e3c95d;
  width: 8rem;
  height: 6rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  text-align: right;
}`}
    />
  );
};

export default Ribbon;
