import { Outlet, Link } from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "Try CSS clip-path" };
};

export default function ClippathRoute() {
  return (
    <div className="pt-10">
      <div>
        <nav className="px-4">
          <ul className="list-disc">
            <li className="text-2xl font-bold">clip-path</li>
          </ul>
        </nav>
      </div>
      <br />
      <Outlet />
      <div className="pt-4 text-xl font-bold">
        <Link to="/">Top</Link>
      </div>
    </div>
  );
}
