import { Outlet } from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "Try CSS clip-path" };
};

export default function ClippathRoute() {
  return <Outlet />;
}
