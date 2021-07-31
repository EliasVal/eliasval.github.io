import "../Styling/CodeBlock.scss";
import CodeText from "./CodeText";

const CodeBlock = ({ code, margin, addCursor }) => {
  let delay = 0;
  return (
    <div
      className="codeblock"
      style={{ margin: `${margin.includes(" ") ? margin : margin + " auto"}` }}>
      <div>
        <div className="codeline">
          {code.map((codeLine) => {
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
            return temp;
          })}

          {addCursor && (
            <>
              {" "}
              <span className="cursor">.</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
