import React from 'react'


export default function ToggleDark({isLumos, handleLumosMode}){
    return(
        <>
        <div>
            <button id="toggle" onClick={handleLumosMode}>{isLumos? "Lumos":"Nox"} Mode</button>
          {  console.log(" in button: ", isLumos)}
        </div>
        </>

    )

}