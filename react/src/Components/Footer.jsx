import "../Styling/Footer.scss";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <div id="madeWithReact">
          <h5>
            Made in <FaReact viewBox="0 0 512 450" /> with &#128154;
          </h5>
        </div>
        <div id="inspiredBy">
          <h5>
            Design Inspired by{" "}
            <a
              title="JustMeDev's Github"
              href="https://github.com/JustMeDev"
              target="_blank"
              rel="noreferrer">
              JustMeDev
            </a>
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
