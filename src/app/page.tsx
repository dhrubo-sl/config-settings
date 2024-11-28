import { Routes } from "@/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-xs">
      <h1>Home page</h1>
      <Link href={Routes.STEP_ONE}>Step One</Link>
    </div>
  );
}
