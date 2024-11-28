"use client";
// components/steps/StepOne.tsx
import InputField from "@/components/InputField";
import { useConfigContext } from "@/context/configContext";
import { Routes } from "@/utils";
import { defaultButtonStyle } from "@/utils/constants";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const StepOne: React.FC = () => {
  const [inputColumn, setInputColumn] = useState(""); // Temporary input value
  const { configData, updateConfigDetails } = useConfigContext();

  console.log("rerender", configData.projectLogColumns);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateConfigDetails({ name, value });
  };

  const handleSubmit = () => {
    redirect(Routes.REVIEW);
  };

  const updateProjectLogColumns = (columns: string[]) => {
    updateConfigDetails({ name: "projectLogColumns", value: columns });
  };

  const handleAddColumn = () => {
    if (inputColumn.trim() !== "") {
      const newColumns = [...configData.projectLogColumns, inputColumn.trim()];
      updateProjectLogColumns(newColumns);
      setInputColumn(""); // Clear input field
    }
  };

  const handleRemoveColumn = (index: number) => {
    const newColumns = configData.projectLogColumns.filter(
      (_, i) => i !== index
    );
    updateProjectLogColumns(newColumns);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <InputField
        type="text"
        name="version"
        value={configData.version}
        onChange={handleChange}
        label="Version"
        required
      />
      <InputField
        type="text"
        name="projectId"
        value={configData.projectId}
        onChange={handleChange}
        label="Project ID"
        required
      />
      <InputField
        type="text"
        name="language"
        value={configData.language}
        onChange={handleChange}
        label="Language"
        required
      />
      <InputField
        type="text"
        name="languageId"
        value={configData.languageId}
        onChange={handleChange}
        label="Language ID"
        required
      />
      <InputField
        type="text"
        name="ISO"
        value={configData.ISO}
        onChange={handleChange}
        label="ISO"
        required
      />
      <InputField
        type="text"
        name="productName"
        value={configData.productName}
        onChange={handleChange}
        label="Product Name"
        required
      />

      <InputField
        type="text"
        name="projectLogColumns"
        value={inputColumn}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputColumn(e.target.value)
        }
        label="Project Log Columns"
        required
      />
      <div>
        <button
          type="button"
          className=" bg-blue-700 hover:bg-blue-800 "
          onClick={handleAddColumn}
        >
          Add
        </button>
      </div>

      <div>
        <p>Project Colimns:</p>
        <ul>
          {configData.projectLogColumns.map((e, index) => (
            <li key={index} className="text-black">
              {e}{" "}
              <button type="button" onClick={() => handleRemoveColumn(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className={defaultButtonStyle}
      >
        Save and Continue
      </button>
    </form>
  );
};

export default StepOne;
