import { ChangeEvent, useEffect, useState } from "react";
import { stringSpaceReplace, useComponentHook } from "./helpers-and-hooks";

interface Props {
  text: string;
}

export function Component(props: Props) {
  //
  const { text } = props;
  const moreText = "more text";
  let a = 0;

  // const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const { increment, decrement, value } = useComponentHook(0);

  const handleOnClickConsole = () => {
    console.log("clicked");
    a = a++;
  };

  // const handleOnClickState = () => setCount(count + 1);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  useEffect(() => {
    console.log("MOUNT");
    return () => {
      console.log("UNMOUNT");
    };
  }, []);

  useEffect(() => {
    console.log("VALUE UPDATED");
  }, [value]);

  return (
    <div>
      <p>a: {a}</p>
      <p>text: {text}</p>
      <p>moreText: {moreText}</p>
      {/*before <p>static text</p>*/}
      <p>{stringSpaceReplace("static text")}</p>
      <button onClick={handleOnClickConsole}>console write</button>
      {/*before <button onClick={handleOnClickState}>change state</button>*/}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <input onChange={(event) => handleInput(event)} value={inputText}></input>
      {/*before <p>count: {count}</p>*/}
      <p>count: {value}</p>
    </div>
  );
}
