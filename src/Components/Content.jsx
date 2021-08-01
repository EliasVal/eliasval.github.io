import CodeBlock from "./CodeBlock";
import data from "../data.json";

import "../Styling/Content.scss";
import Projects from "./Projects";

const Content = () => {
  return (
    <section id="content">
      <section id="about">
        <CodeBlock
          margin="3em"
          code={[
            { text: "import", color: "#FB4028" },
            { text: " data ", color: "#69A588" },
            { text: "from ", color: "#FB4028" },
            { text: ' "./Data.json"', color: "#81AC26" },
            { text: ";", color: "#A89977" },
            { text: "br" },
            { text: "console", color: "orange" },
            { text: ".", color: "white" },
            { text: "log", color: "magenta" },
            { text: "(", color: "white" },
            { text: "data.introduction", color: "#69A588" },
            { text: ")", color: "white" },
            { text: ";", color: "#A89977" },
            { text: "br" },
            { text: "br" },
            { text: "br" },
            { text: "// Output:", color: "#A89977" },
          ]}
        />
        <h4 className="intro notBlueSelect">
          Hello! I'm Elias! I'm a{" "}
          {new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970}{" "}
          year old Programmer! I make anything from Websites, to games to
          Discord bots. I've been programming since 11, starting off with web
          development with HTML5 and CSS3. I've learned C# at 12 and got into
          game development using the Unity Game Engine. Nowdays, I use:{" "}
          <span
            style={{
              textDecoration: "underline",
              textDecorationStyle: "solid",
              textDecorationThickness: "2px",
              textDecorationSkipInk: "none",
              textDecorationSkip: "none",
              textDecorationColor: "darkblue",
            }}>
            {data.iknow}.
          </span>
          <br />
          My Comissions are open, I can make any game, website, etc. you want as
          long as the content is legal and doesn't include and NSFW/NSFL.
          <br />
          <br />
          If you're interested in a comission DM me over on Discord:{" "}
          {data.discordtag}.
        </h4>
      </section>

      <section id="projects">
        <CodeBlock
          margin="10em auto 5em auto"
          addCursor={true}
          code={[
            { text: "console", color: "orange" },
            { text: ".", color: "white" },
            { text: "log", color: "magenta" },
            { text: "(", color: "white" },
            { text: "data.projects", color: "#69A588" },
            { text: ")", color: "white" },
            { text: ";", color: "#A89977" },
            { text: "br" },
            { text: "br" },
            { text: "br" },
            { text: "// Output:", color: "#A89977" },
          ]}
        />
        <Projects projects={data.projects} />
      </section>
    </section>
  );
};

export default Content;
