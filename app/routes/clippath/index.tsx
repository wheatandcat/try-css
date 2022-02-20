import Section from "~/components/Clippath/Section";
import Inset from "~/components/Clippath/Inset";
import Circle from "~/components/Clippath/Circle";
import Triangle from "~/components/Clippath/Triangle";
import Ribbon from "~/components/Clippath/Ribbon";
import Button from "~/components/Clippath/Button";
import Image from "~/components/Clippath/Image";
import Screen from "~/components/Clippath/Screen";
import Light from "~/components/Clippath/Light";
import { Link } from "remix";

export default function Index() {
  return (
    <div>
      <nav className="px-8">
        <ol className="list-decimal">
          <li className="text-xl pl-2 pb-1">
            <Link to="/clippath/section">section</Link>
          </li>
          <li className="text-xl pl-2 pb-1">
            <Link to="/clippath/inset">inset</Link>
          </li>
          <li className="text-xl pl-2 pb-1">
            <Link to="/clippath/circle">circle</Link>
          </li>
          <li className="text-xl pl-2 pb-1">
            <Link to="/clippath/triangle">triangle</Link>
          </li>
          <li className="text-xl pl-2 pb-1">
            <Link to="/clippath/ribbon">ribbon</Link>
          </li>
          <li className="text-xl pl-2 pb-1">
            <Link to="/clippath/button">button</Link>
          </li>
          <li className="text-xl pl-2 pb-1">
            <Link to="/clippath/image">image</Link>
          </li>
          <li className="text-xl pl-2 pb-1">
            <Link to="/clippath/screen">screen</Link>
          </li>
          <li className="text-xl pl-2 pb-1">
            <Link to="/clippath/light">light</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
