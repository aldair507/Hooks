import { useRef } from "react";

const AutoFocus = () => {
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
    inputRef.current.style.border = '5px solid red';
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={focus}>Focus</button> 
    </>
  );
};

export default AutoFocus;
