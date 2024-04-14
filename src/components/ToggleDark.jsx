import React from 'react'
export default function ToggleDark({isLumos, handleLumosMode}){
    return(
        <>
        <header>
            <button id="toggle" onClick={handleLumosMode}>{isLumos? "Lumos":"Nox"} Mode</button>
          {  console.log(" in button: ", isLumos)}
        </header>
        </>

    )

}