import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <Project
          projectData={project.projectData}
          margin={project.margin}
        ></Project>
      ))}
    </>
  );
};

export default Projects;
