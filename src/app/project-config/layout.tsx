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
    <div className="w-full px-2 lg:px-0">
      <PageHeader
        title="Share a Deal"
        subtitle="Have an amazing deal or discount tailored for developers? Let us know!"
      />

      <div className="mt-20 mb-28 flex flex-col gap-x-16 lg:flex-row">
        <StepNavigation />
        <ConfigContextProvider>
          <div className="w-full">{children}</div>
        </ConfigContextProvider>
      </div>
    </div>
  );
}
