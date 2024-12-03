"use client";
// components/steps/StepOne.tsx
import SubmitButton from "@/components/SubmitButton";
import { useConfigContext } from "@/context/configContext";
import { Routes } from "@/utils";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import DynamicForm from "./DynamicForm";

const StepTwo: React.FC = () => {
  const { configData, updateConfigDetails } = useConfigContext();

  const [hierarchies, setHierarchies] = useState([]);
  const [icons, setIcons] = useState([]);
  const [mediaOptions, setMediaOptions] = useState([]);
  const [sourceAudioFiles, setSourceAudioFiles] = useState([]);
  //   const [steps, setSteps] = useState([]);

  // Set default values from configData if available
  useEffect(() => {
    if (configData) {
      setHierarchies(configData.hierarchies || []);
      setIcons(configData.icons || []);
      setMediaOptions(configData.mediaOptions || []);
      setSourceAudioFiles(configData.sourceAudioFiles || []);
      //   setSteps(configData.setSteps || []);
    }
  }, [configData]);

  const handleSubmit = () => {
    const configArray = [
      { name: "hierarchies", data: hierarchies },
      { name: "icons", data: icons },
      { name: "mediaOptions", data: mediaOptions },
      { name: "sourceAudioFiles", data: sourceAudioFiles },
      //   { name: "steps", data: steps },
    ];

    configArray.map((e) => {
      updateConfigDetails({ name: e.name, value: e.data });
    });
    redirect(Routes.STEP_THREE);
  };

  const formsConfig = [
    {
      title: "Icons",
      name: "icons",
      fields: [
        { name: "id", label: "ID", type: "text", required: true },
        { name: "title", label: "Title", type: "text", required: true },
        { name: "path", label: "Path", type: "text", required: true },
      ],
      data: icons,
      setData: setIcons,
    },
    {
      title: "Source Audio Files",
      name: "sourceAudioFiles",
      fields: [
        { name: "title", label: "Title", type: "text", required: true },
        { name: "fileName", label: "File Name", type: "text", required: true },
        {
          name: "isDefault",
          label: "Is Default",
          type: "checkbox",
          required: false,
        },
      ],
      data: sourceAudioFiles,
      setData: setSourceAudioFiles,
    },
    {
      title: "Hierarchies",
      name: "hierarchies",
      fields: [
        { name: "id", label: "ID", type: "text", required: true },
        { name: "title", label: "Title", type: "text", required: true },
      ],
      data: hierarchies,
      setData: setHierarchies,
    },
    {
      title: "Media Options",
      name: "mediaOptions",
      fields: [
        { name: "title", label: "Title", type: "text", required: true },
        { name: "fileName", label: "File Name", type: "text", required: true },
        {
          name: "active",
          label: "Is Active",
          type: "checkbox",
          required: false,
        },
        {
          name: "enable",
          label: "Is Enable",
          type: "checkbox",
          required: false,
        },
      ],
      data: mediaOptions,
      setData: setMediaOptions,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      {/* Render each dynamic form */}
      {formsConfig.map(({ title, fields, data, setData }, index) => (
        <div key={index} className="mb-10">
          <h3>{title}</h3>
          <DynamicForm fields={fields} data={data} setData={setData} />
        </div>
      ))}

      <SubmitButton
        onClickHandler={handleSubmit}
        title="Save and continue to step 3"
      />
    </form>
  );
};

export default StepTwo;
