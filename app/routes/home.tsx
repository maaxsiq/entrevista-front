import { HomePage } from "~/pages/HomePage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My test" },
    { name: "description", content: "Welcome to My Test!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
