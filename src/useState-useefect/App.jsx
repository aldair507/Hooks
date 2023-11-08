import { useEffect, useState } from "react";

export const App=(()=>{
  const [file,usefile] = useState(0)
  const hander=(()=>{
    usefile(file+1)
  })

  useEffect(()=>{
    console.log('se esta ejecutando ')
  },[file])

  return(
    <div>
      <button onClick={hander}>
      click
      </button>
      <p>
        {file}
      </p>
    </div>
  )
})