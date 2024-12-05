"use client";

import InputField from "@/components/InputField";
import SubmitButton from "@/components/SubmitButton";
import { createProject } from "@/http/apis";
import { redirect } from "next/navigation";
import { useState } from "react";

interface IProjectInfo {
  name: string;
}

const CreateProject = () => {
  const [projectInfo, setProjectInfo] = useState<IProjectInfo>({
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (projectInfo.name) {
      const doc = await createProject(projectInfo);
      if (!doc.success) {
        window.alert(doc.message);
      }
      window.alert("Created");
      redirect("/projects");
    }
  };

  return (
    <div className="max-w-md">
      <form className="max-w-md">
        <InputField
          type="text"
          name="name"
          value={projectInfo.name}
          onChange={handleChange}
          label="Project Name"
          required
        />

        <SubmitButton onClickHandler={handleSubmit} title="Submit" />
      </form>
    </div>
  );
};

export default CreateProject;
