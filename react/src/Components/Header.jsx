import { FaDiscord, FaGithub } from "react-icons/fa";
import "../Styling/Header.scss";

const Header = () => {
  return (
    <header id="header">
      <div>
        <h1>EliasValk</h1>
        <span>
          <a href="https://discord.gg/RReQ7kW" target="_blank" rel="noreferrer">
            <FaDiscord />
          </a>
          <a
            href="https://github.com/EliasVal"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
