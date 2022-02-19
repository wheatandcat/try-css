import { Meta, Outlet, LinksFunction } from "remix";
import type { MetaFunction } from "remix";
import stylesUrl from "../styles/clippath.css";

export const meta: MetaFunction = () => {
  return { title: "Try CSS clip-path" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export default function ClippathRoute() {
  return <Outlet />;
}
