import type { Route } from "../../+types/root";
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
