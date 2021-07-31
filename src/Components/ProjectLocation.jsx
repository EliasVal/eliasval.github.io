import {
  FaDownload,
  FaGithub,
  FaItchIo,
  FaDiscord,
  FaGlobe,
} from "react-icons/fa";

const ProjectLocation = ({ logo, url }) => {
  const chooseLogo = () => {
    switch (logo) {
      case "github":
        return <FaGithub title="Source Code" />;
      case "itchio":
      case "itch":
        return <FaItchIo title="Available at itch.io" />;
      case "download":
        return <FaDownload title="Download" />;
      case "discord":
        return <FaDiscord title="Invite to Discord" />;
      case "web":
        return <FaGlobe title="Redirect to Website" />;
      default:
        throw new Error("Unknown Logo");
    }
  };

  return (
    <a href={url} className="icon" target="_blank" rel="noreferrer">
      {chooseLogo()}
    </a>
  );
};

export default ProjectLocation;
