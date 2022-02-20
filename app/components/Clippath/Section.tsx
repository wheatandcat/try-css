import ListItem from "../ListItem";

const Section = () => {
  return (
    <ListItem
      el={
        <div className="box">
          <div className="section1 text-xs">
            polygon(100% 0, 0 0, 0 85%, 100% 100%)
          </div>
          <div className="section2"></div>
          <div className="section3 text-xs">
            polygon(100% 0, 0 15%, 0 100%, 100% 100%);
          </div>
        </div>
      }
      code={`.root {
  background-color: #e3c95d;
}
          
.section1 {
  width: 100%;
  clip-path: polygon(100% 0, 0 0, 0 85%, 100% 100%);
  background-color: #fff;
}

.section2 {
  width: 100%;
}

.section3 {
  width: 100%;
  clip-path: polygon(100% 0, 0 15%, 0 100%, 100% 100%);
  background-color: #fff;
}`}
    />
  );
};

export default Section;
