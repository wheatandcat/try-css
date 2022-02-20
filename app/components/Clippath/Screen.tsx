import ListItem from "../ListItem";

const Screen = () => {
  return (
    <ListItem
      el={
        <div className="box web-body">
          <div className="header">
            <div className="font-bold text-white p-2">Logo</div>
            <div className="font-bold text-white text-xs text-center">
              title ...
            </div>
          </div>
          <div className="mt-36 flex justify-around flex-wrap">
            <div className="card">
              <div className="card-item1" />
              <div className="card-item2" />
            </div>
            <div className="card">
              <div className="card-item1" />
              <div className="card-item2" />
            </div>
            <div className="card">
              <div className="card-item1" />
              <div className="card-item2" />
            </div>
            <div className="card">
              <div className="card-item1" />
              <div className="card-item2" />
            </div>
            <div className="card">
              <div className="card-item1" />
              <div className="card-item2" />
            </div>
            <div className="card">
              <div className="card-item1" />
              <div className="card-item2" />
            </div>
          </div>
        </div>
      }
      code={`.body {
  position: relative;
  background-color: #e2e2e2;
  height: 30rem;
}

.header {
  position: absolute;
  height: 10rem;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 70%);
  background-color: #c8a711;
}

.header:after {
  content: "";
  position: absolute;
  height: 13rem;
  left: 0;
  width: 100%;
  bottom: 0rem;
  z-index: -1;
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 70%);
  background-color: #e3c95d;
}

.card {
  position: relative;
  width: 7rem;
  height: 7rem;
  background-color: #fff;
  border-radius: 8%;
  margin: 1rem;
}

.card:after {
  content: "";
  position: absolute;
  width: 7rem;
  height: 7rem;
  clip-path: inset(10% 10px 30% round 5px);
  background-color: #cbe7eb;
}

.card-item1 {
  position: absolute;
  width: 3rem;
  height: 7rem;
  clip-path: inset(82% 10px 15% round 5px);
  background-color: #aaa;
}

.card-item2 {
  position: absolute;
  left: 2rem;
  width: 4rem;
  height: 7rem;
  clip-path: inset(82% 10px 15% round 5px);
  background-color: #aaa;
}`}
    />
  );
};

export default Screen;
