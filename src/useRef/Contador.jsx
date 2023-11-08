import { useEffect, useRef, useState } from "react";

const Contador = () => {
    const timer = useRef(null);
    const [cont, setCont] = useState(0);
    const [activo, setActivo] = useState(true);

    useEffect(() => {
        timer.current = setInterval(() => {
            setCont((count) => count + 1);
        }, 1000);

        return () => {
            clearInterval(timer.current);
        };
    }, []);

    const handleClick = () => {
        if (activo) {
            clearInterval(timer.current);
        } else {
            timer.current = setInterval(() => {
                setCont((count) => count + 1);
            }, 1000);
        }
        setActivo(!activo);
    };

    return (
        <div>
            <p>Contador: {cont}</p>
            <button onClick={handleClick}>{activo ? "Parar" : "Reanudar"}</button>
        </div>
    );
};

export default Contador;
