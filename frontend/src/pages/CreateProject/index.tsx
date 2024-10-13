// src/pages/CreateProject.tsx
import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const CreateProject: React.FC = () => {
  const [isActive, setIsActive] = useState(true);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission to create a new project
    console.log("Project Created:", { projectName, description, isActive });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Create New Project</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label className="block">Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded p-2 w-full"
            required
          ></textarea>
        </div>
        <div className="mt-4 flex items-center">
          <Switch
            checked={isActive}
            onChange={setIsActive}
            className={`${isActive ? "bg-blue-600" : "bg-gray-200"}
                            relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${isActive ? "translate-x-6" : "translate-x-1"}
                                inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
          <span className="ml-2 text-gray-700">
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 mt-4"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
