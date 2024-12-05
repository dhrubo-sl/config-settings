import { Routes } from "@/utils";
import Link from "next/link";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="">
      <h3 className="mb-4 text-4xl font-semibold text-black md:text-md">
        {title}
      </h3>
      {subtitle && (
        <span className="text-sm font-light text-white md:text-2xl">
          {subtitle}
        </span>
      )}
      <div className="flex flex-wrap gap-3 max-w-md">
        <Link className="bg-gray-400 p-2" href="/products">
          Products
        </Link>
        <Link className="bg-gray-400 p-2" href={Routes.STEP_ONE}>
          Project Config
        </Link>
      </div>
    </div>
  );
}
