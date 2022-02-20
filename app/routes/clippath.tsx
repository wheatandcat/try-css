import { Outlet } from "remix";
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
      <br />
      <Outlet />
    </div>
  );
}
