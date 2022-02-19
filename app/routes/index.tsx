import type { LinksFunction } from "remix";
import stylesUrl from "../styles/index.css";
import { Link } from "remix";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export default function Index() {
  return (
    <div className="pt-10">
      <nav className="px-4">
        <ul className="list-disc">
          <li className="text-2xl font-bold">
            <Link to="clippath">clip-path</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
