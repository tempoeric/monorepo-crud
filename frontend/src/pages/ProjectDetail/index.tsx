// src/pages/ProjectDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch project details using the id
  return (
    <div>
      <h1 className="text-2xl font-bold">Project Details</h1>
      <p>Details for project ID: {id}</p>
      {/* Render project details here */}
      <button className="mt-4 bg-blue-500 text-white rounded p-2">
        Edit Project
      </button>
    </div>
  );
};

export default ProjectDetail;
