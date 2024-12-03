import { Routes } from "@/utils";
import Link from "next/link";

const ProjectConfig = () => {
  return (
    <div className="w-full max-w-xs">
      <h1>Project page</h1>
      <Link href={Routes.STEP_ONE}>Step One</Link>
    </div>
  );
};
export default ProjectConfig;
