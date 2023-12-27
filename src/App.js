import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const handleStartAddingProject = () => {
    setProjectState((prev) => {
      return { ...prev, selectedProjectId: null };
    });
  };
  const handleAddNewProject = (projectData) => {
    console.log(projectData);
    setProjectState((prev) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject add={handleAddNewProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleStartAddingProject} />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddingProject}
      />
      {content}
    </main>
  );
}

export default App;
