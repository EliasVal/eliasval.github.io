import "../Styling/CodeBlock.scss";
import CodeText from "./CodeText";

const CodeBlock = ({ code, margin, addCursor, delay = 0 }) => {
  return (
    <div
      className="codeblock"
      style={{ margin: `${margin.includes(" ") ? margin : margin + " auto"}` }}>
      <div>
        <div className="codeline">
          {code.map((codeLine, i) => {
            const temp =
              codeLine.text === "br" ? (
                <>
                  <br />
                </>
              ) : (
                <CodeText
                  text={codeLine.text}
                  color={codeLine.color}
                  delay={delay}></CodeText>
              );

            delay += codeLine.text.length * 50;
            if (Object.values(code).length - 1 === i && addCursor)
              setTimeout(
                () =>
                  (document.getElementById("cursor").style.display = "initial"),
                delay + 300
              );
            return temp;
          })}

          {addCursor && (
            <>
              {" "}
              <span id="cursor" style={{ display: "none" }} className="cursor">
                .
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
