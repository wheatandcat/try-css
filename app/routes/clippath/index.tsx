import Section from "~/components/Clippath/Section";
import Inset from "~/components/Clippath/Inset";
import Circle from "~/components/Clippath/Circle";
import Triangle from "~/components/Clippath/Triangle";
import Ribbon from "~/components/Clippath/Ribbon";
import Button from "~/components/Clippath/Button";
import Image from "~/components/Clippath/Image";
import Screen from "~/components/Clippath/Screen";
import Light from "~/components/Clippath/Light";

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
        </div>
        <br />
        <br />
        <Section />

        <Inset />

        <Circle />

        <Triangle />

        <Ribbon />

        <Button />

        <Image />

        <Screen />

        <Light />
      </div>
    </>
  );
}
