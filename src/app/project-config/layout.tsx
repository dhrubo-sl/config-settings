import StepNavigation from "@/components/StepNavigation";
import { ConfigContextProvider } from "@/context/configContext";
import React from "react";

export default function ProjectConfigLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-28">
      <ConfigContextProvider>
        <div>
          <StepNavigation />
        </div>

        <div className="w-full">{children}</div>
      </ConfigContextProvider>
    </div>
  );
}
