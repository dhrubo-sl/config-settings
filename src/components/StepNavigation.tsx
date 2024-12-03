"use client";
import { useConfigContext } from "@/context/configContext";
import { Routes } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Step 1",
    route: "step-one",
    link: Routes.STEP_ONE,
  },
  {
    title: "Step 2",
    route: "step-two",
    link: Routes.STEP_TWO,
  },
  {
    title: "Step 3",
    route: "step-three",
    link: Routes.STEP_THREE,
  },
  { title: "Review", route: "review", link: Routes.REVIEW },
];

export default function StepNavigation() {
  const { resetLocalStorage } = useConfigContext();
  const pathname = usePathname();
  const currentPath = path.basename(pathname);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setCurrentStep(steps.findIndex((step) => step.route === currentPath));
  }, [currentPath]);

  const handleReset = () => {
    window.confirm("Do you want to reset?");
    resetLocalStorage();
  };
  return (
    <div className="max-w-md">
      {/* back button */}
      {/* <Link
        href={steps[currentStep - 1]?.link || steps[0].link}
        className="mb-4 flex items-center gap-2 text-xl lg:mb-12 lg:gap-5"
      >
        Back
      </Link> */}

      {/* list of form steps */}
      <div className="flex flex-row justify-between md:gap-x-20 mb-5">
        {steps.map((step, i) => (
          <Link href={step.link} key={step.link} className="" prefetch={true}>
            <span
              className={clsx(
                "flex h-10 w-10 items-center justify-center rounded-full border  text-sm  transition-colors duration-200  lg:h-12 lg:w-12 lg:text-lg",
                {
                  "border-none bg-blue-500 text-black group-hover:border-none group-hover:text-black":
                    currentPath === step.route,
                  "border-white/75 bg-gray-800 group-hover:border-white group-hover:text-white text-white/75":
                    currentPath !== step.route,
                }
              )}
            >
              {i + 1}
            </span>
            <span
              className={clsx(
                "hidden text-black/75 transition-colors duration-200 group-hover:text-black text-sm lg:block",
                {
                  "font-light": currentPath !== step.route,
                  "font-semibold text-black": currentPath === step.route,
                }
              )}
            >
              {step.title}
            </span>
          </Link>
        ))}

        <span className="">
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-800 flex h-10 w-10 items-center justify-center rounded-full border text-sm text-white duration-200  lg:h-12 lg:w-12"
          >
            Reset
          </button>
        </span>
      </div>
    </div>
  );
}
