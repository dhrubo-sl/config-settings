"use client";
import { useConfigContext } from "@/context/configContext";
import React from "react";

interface JSONViewerProps {
  data: any; // Accepts any valid JSON type
  level?: number; // Optional level for nested indentation
}
const level = 0;
const JSONViewer: React.FC<JSONViewerProps> = ({ data, level = 0 }) => {
  // Function to format keys for nested display
  const indentStyle = { paddingLeft: `${level * 20}px` };

  if (Array.isArray(data)) {
    return (
      <div style={indentStyle}>
        <strong>[</strong>
        {data.map((item, index) => (
          <div key={index}>
            <JSONViewer data={item} level={level + 1} />
          </div>
        ))}
        <strong>]</strong>
      </div>
    );
  }

  if (data && typeof data === "object") {
    return (
      <div style={indentStyle}>
        <strong>{`{`}</strong>
        {Object.entries(data).map(([key, value]) => (
          <div key={key} style={{ marginLeft: "10px" }}>
            <strong>{key}:</strong>{" "}
            <JSONViewer data={value} level={level + 1} />
          </div>
        ))}
        <strong>{`}`}</strong>
      </div>
    );
  }

  // For primitive values and strings
  return (
    <div style={indentStyle}>
      {typeof data === "string" ? `"${data}"` : String(data)}
    </div>
  );
};

const ConfigReview: React.FC = () => {
  const { configData, updateConfigDetails } = useConfigContext();

  const data = configData;
  // Function to format keys for nested display
  const indentStyle = { paddingLeft: `${level * 20}px` };

  if (Array.isArray(data)) {
    return (
      <div style={indentStyle}>
        <strong>[</strong>
        {data.map((item, index) => (
          <div key={index}>
            <JSONViewer data={item} level={level + 1} />
          </div>
        ))}
        <strong>]</strong>
      </div>
    );
  }

  if (data && typeof data === "object") {
    return (
      <div style={indentStyle}>
        {/* <strong>{`{`}</strong> */}
        {Object.entries(data).map(([key, value]) => (
          <div key={key} style={{ marginLeft: "10px" }}>
            <strong>{key}:</strong>{" "}
            <JSONViewer data={value} level={level + 1} />
          </div>
        ))}
        {/* <strong>{`}`}</strong> */}
      </div>
    );
  }

  // For primitive values and strings
  return (
    <div style={indentStyle}>
      {typeof data === "string" ? `"${data}"` : String(data)}
    </div>
  );
};

export default ConfigReview;
