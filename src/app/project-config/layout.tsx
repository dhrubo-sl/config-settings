import PageHeader from "@/components/PageHeader";
import StepNavigation from "@/components/StepNavigation";
import { ConfigContextProvider } from "@/context/configContext";
import React from "react";

export default function ProjectConfigLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <PageHeader title="Project Configuration" subtitle="" />

      <div className="ml-10 mt-10 mb-28 flex flex-wrap gap-x-30 lg:flex-row">
        <ConfigContextProvider>
          <div>
            <StepNavigation />
          </div>

          <div className="w-full">{children}</div>
        </ConfigContextProvider>
      </div>
    </div>
  );
}
