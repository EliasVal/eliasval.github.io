import Typist from "react-typist";

const CodeText = ({ text, color, delay }) => {
  console.log(delay);
  return (
    <Typist stdTypingDelay={-1} avgTypingDelay={50} cursor={{ show: false }}>
      <Typist.Delay ms={delay} />
      <p style={{ color: color }}>{text}</p>
    </Typist>
  );

  //;
};

export default CodeText;
