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
        return <SiUnity title="Unity" dataContainer="body" />;
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
    <div className="project flex flex-row" style={{ margin: `${margin} auto` }}>
      <div class="imageDiv">
        <img alt="" src={projectData.img} />
      </div>
      <div className="content">
        <div className="title">
          <div className="flex flex-between">
            <h1>{projectData.title}</h1>
          </div>
        </div>
        <div className="desc">
          <p className={projectData.desc.length >= 70 && "scaleText"}>
            {projectData.desc
              .split("|")
              .map((desc) => (desc === "\n" ? <br /> : desc))}
          </p>
        </div>
      </div>
      <div className="icons">
        {projectData.availableAt.map((loc) => (
          <ProjectLocation url={loc.url} logo={loc.logo}></ProjectLocation>
        ))}
      </div>
      <div className="madeWith">
        {projectData.madeWith.map((mw) => madeWithIcon(mw))}
      </div>
      <div className="status">
        <h5>
          Status:{" "}
          <span style={{ color: projectData.status.color }}>
            {projectData.status.title}
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Project;
