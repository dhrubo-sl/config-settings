"use client";
import { useConfigContext } from "@/context/configContext";
import { IMode, IStep } from "@/interfaces";
import { Routes } from "@/utils";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import DynamicForm from "../step-two/DynamicForm";

const StepThreeForm: React.FC = () => {
  const { configData, updateConfigDetails } = useConfigContext();
  const [modes, setModes] = useState<IMode[]>([]);
  const [steps, setSteps] = useState<IStep[]>([]);

  useEffect(() => {
    if (configData) {
      setModes(configData.modes || []);
      setSteps(configData.steps || []);
    }
  }, [configData]);

  const handleSubmit = () => {
    const configArray = [{ name: "modes", data: modes }];
    configArray.map((e) => {
      updateConfigDetails({ name: e.name, value: e.data });
    });
    redirect(Routes.REVIEW);
  };

  // this function has bug
  const handleAddMode = (modes: any) => {
    console.log({ modes });
    modes[modes.length - 1].steps = steps;
    setModes(modes);
    setSteps([]);
  };

  const formsConfig = [
    {
      title: "Modes Management",
      name: "modes",
      fields: [
        { name: "id", label: "ID", type: "text", required: true },
        { name: "name", label: "Name", type: "text", required: true },
        { name: "iconId", label: "Icon ID", type: "text", required: true },
        { name: "hasToggle", label: "Has Toggle", type: "checkbox" },
        {
          name: "defaultHierarchy",
          label: "Default Hierarchy",
          type: "text",
          required: true,
        },
        {
          name: "hasLevelsToggle",
          label: "Has Levels Toggle",
          type: "checkbox",
        },
      ],
      data: modes,
      setData: setModes,
    },
  ];

  const stepFields = [
    {
      title: "Manage Steps",
      name: "steps",
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "order", label: "Order", type: "number", required: true },
        {
          name: "hasToggle",
          label: "Has Toggle",
          type: "checkbox",
          required: false,
        },
      ],
      data: steps,
      setData: setSteps,
    },
  ];

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Mode Configuration</h3>

      <h5 className="text-lg font-semibold mt-6">Steps Configuration</h5>
      {stepFields.map(({ title, fields, data, setData }, index) => (
        <div key={index} className="mb-10">
          <h3>{title}</h3>
          <DynamicForm fields={fields} data={data} setData={setData} />
          <p>These steps will be added to the below mode</p>
        </div>
      ))}

      <h5 className="text-xl font-semibold mb-4">Mode Details</h5>
      {formsConfig.map(({ title, fields, data, setData }, index) => (
        <div key={index} className="mb-10">
          <h3>{title}</h3>
          <DynamicForm
            fields={fields}
            data={data}
            setData={setData}
            callback={handleAddMode}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save and Continue to Revew
      </button>
    </form>
  );
};

export default StepThreeForm;
