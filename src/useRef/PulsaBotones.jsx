import React, { useRef } from "react";

const PulsaBoton = () => {
  const cont = useRef(0);

  const handleClick = (incrementa) => {
    if (incrementa) {
      cont.uno++;
    } else {
      cont.uno--;
    }
    console.log(`contador: ${cont.uno}`);
  };

  return (
    <div>
      <p>Contador: {cont.uno}</p>
      <button onClick={() => handleClick(false)}>Decrementa</button>
      <button onClick={() => handleClick(true)}>Incrementa</button>
    </div>
  );
};

export default PulsaBoton;
