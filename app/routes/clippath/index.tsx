export default function Index() {
  return (
    <>
      <div className="pt-10">
        <div>
          <nav className="px-4">
            <ul className="list-disc">
              <li className="text-2xl font-bold">clip-path</li>
            </ul>
          </nav>
          <div className="box">
            <div className="section1 text-xs">
              polygon(100% 0, 0 0, 0 85%, 100% 100%)
            </div>
            <div className="section2"></div>
            <div className="section3 text-xs">
              polygon(100% 0, 0 15%, 0 100%, 100% 100%);
            </div>
          </div>
          <div className="box">
            <div className="inset text-xs">clip-path: inset(20px)</div>
          </div>
          <div className="box">
            <div className="circle text-xs">circle(80px at 50% 50%);</div>
          </div>
          <div className="box flex justify-center items-center p-5">
            <div className="triangle"></div>

            <div className="text-xs">
              clip-path: polygon(0 100%, 50% 0, 100% 100%);
            </div>
          </div>
          <div className="box-white relative">
            <div className="ribbon font-bold">
              <span className="pr-2 text-red-400">Pick up!</span>
            </div>
            <div className="text-xs pt-20 pl-10">
              clip-path: polygon(0 0, 100% 0, 100% 100%);
            </div>
          </div>
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

          <div className="box-white p-10 flex justify-center items-center">
            <button className="item-button font-bold">
              <span>Button</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
