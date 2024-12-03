"use client";
import SubmitButton from "@/components/SubmitButton";
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
    if (!steps.length) {
      window.confirm("You didn't add any step. Do you want to confirm?");
      setModes([]);
      return;
    } else {
      modes[modes.length - 1].steps = steps;
      setModes(modes);
      setSteps([]);
    }
  };

  const formsConfig = [
    {
      title: "Add Modes",
      name: "modes",
      fields: [
        { name: "id", label: "ID", type: "text", required: true },
        { name: "name", label: "Name", type: "text", required: true },
        { name: "iconId", label: "Icon ID", type: "text", required: true },
        {
          name: "defaultHierarchy",
          label: "Default Hierarchy",
          type: "text",
          required: true,
        },
        { name: "hasToggle", label: "Has Toggle", type: "checkbox" },

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
      title: "Add Steps",
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
    <form onSubmit={(e) => e.preventDefault()} className="max-w-md">
      {stepFields.map(({ title, fields, data, setData }, index) => (
        <div key={index} className="mb-10">
          <h3>{title}</h3>
          <DynamicForm fields={fields} data={data} setData={setData} />
          <p className="text-sm"> *Steps will be added to the below mode</p>
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
      <SubmitButton
        onClickHandler={handleSubmit}
        title="Save and continue to review"
      />
    </form>
  );
};

export default StepThreeForm;
