import ListItem from "../ListItem";

const Button = () => {
  return (
    <ListItem
      el={
        <div className="box-white p-10 flex justify-center items-center">
          <button className="item-button font-bold">
            <span>Button</span>
          </button>
        </div>
      }
      code={`.item-button {
  position: relative;
  width: 9rem;
  height: 3rem;
  border-radius: 20px;
  background-color: #e3c95d;
}

.item-button span {
  position: relative;
  z-index: 1;
}

.item-button:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.5;
  clip-path: circle(0 at center);
  transition: 0.3s ease-out;
}

.item-button:hover:before {
  clip-path: circle(100px at center);
}`}
    />
  );
};

export default Button;
