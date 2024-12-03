"use client";
import { useConfigContext } from "@/context/configContext";
import React from "react";

const ConfigReview: React.FC = () => {
  const { configData } = useConfigContext();
  const formattedJSON = JSON.stringify(configData, null, 2);

  return (
    <div>
      <h2>config.json</h2>
      <pre style={{ fontFamily: "monospace", whiteSpace: "pre-wrap" }}>
        <code>{formattedJSON}</code>
      </pre>
    </div>
  );
};

export default ConfigReview;
