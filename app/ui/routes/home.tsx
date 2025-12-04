import type { Route } from "../../routes/+types/home";
import { HomePage } from "../pages/HomePage";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "My test" },
    { name: "description", content: "Welcome to My Test!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
