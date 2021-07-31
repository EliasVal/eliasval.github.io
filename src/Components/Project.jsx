import "../Styling/Project.scss";
import ProjectLocation from "./ProjectLocation";
import {
  SiCsharp,
  SiHtml5,
  SiJavascript,
  SiUnity,
  SiReact,
  SiSass,
  SiTypescript,
  SiFirebase,
  SiNodeDotJs,
  SiElectron,
} from "react-icons/si";

import { FaWpforms, FaCss3 } from "react-icons/fa";

const Project = ({ projectData, margin }) => {
  const madeWithIcon = (iconName) => {
    switch (iconName) {
      case "unity":
        return <SiUnity title="Unity" />;
      case "js":
        return <SiJavascript title="JavaScript" />;
      case "html":
        return <SiHtml5 title="HTML5" />;
      case "react":
        return <SiReact title="React" />;
      case "cs":
        return <SiCsharp title="C#" />;
      case "sass":
      case "scss":
        return <SiSass title="Sass/SCSS" />;
      case "ts":
        return <SiTypescript title="TypeScript" />;
      case "fb":
        return <SiFirebase title="Firebase" />;
      case "njs":
      case "node":
        return <SiNodeDotJs title="Node.js" />;
      case "electron":
        return <SiElectron title="Electron" />;
      case "wpf":
        return <FaWpforms title="WPF Forms" />;
      case "css":
        return <FaCss3 title="CSS3" />;
      default:
        throw new Error("Unknown Icon");
    }
  };

  return (
    <div className="project" style={{ margin: `${margin} auto` }}>
      <div className="imageDiv">
        <img alt="" src={projectData.img} />
      </div>
      <div className="info">
        <h3>{projectData.title}</h3>
        <p>
          {projectData.desc
            .split("|")
            .map((desc) => (desc === "\n" ? <br /> : desc))}
        </p>
      </div>
      <div className="madeWith">
        <p>{projectData.madeWith.map((mw) => madeWithIcon(mw))}</p>
      </div>
      <div className="status">
        <h4>
          Status:{" "}
          <u style={{ color: projectData.status.color }}>
            {projectData.status.title}
          </u>
        </h4>
      </div>
      <div className="icons">
        {projectData.availableAt.map((loc) => (
          <ProjectLocation url={loc.url} logo={loc.logo}></ProjectLocation>
        ))}
      </div>
    </div>
  );
};

export default Project;
