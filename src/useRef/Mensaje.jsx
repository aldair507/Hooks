import { useState, useRef,useEffect } from "react";

const Mensajeprevio=()=>{

    const [Mensaje, setMensaje]= useState('')

    useEffect(()=>{

    },[Mensaje])

    const modifiedMensaje=(e)=>{
        console.log('modifiedMensaje')
        setMensaje(e.target.value)
    }

    return(
        <>
        <input type="text" onChange={modifiedMensaje}/>
        <p>Mensaje:{Mensaje}</p>
        </>
    )

}

export default Mensajeprevio