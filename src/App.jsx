import React, { useState } from 'react'
import ToggleDark from './components/ToggleDark' 

import MusicHeader from './components/MusicHeader'
import SpellsControl from './components/SpellsControl'


function App() {

  console.log("hello111")

  const [isLumos, setIsLumos]  = useState (true)
  function handleLumosMode(){
    setIsLumos((isLumos)=>!isLumos)
    console.log(isLumos)
  }

  return (
      <>
  
    <div className={"App "+ (isLumos? "Lumos" : "Nox")}>
     <ToggleDark isLumos={isLumos} handleLumosMode={handleLumosMode}/>
    <div>"hello"</div>
    <br/> <br/>
    <MusicHeader />



   
    <SpellsControl />
  


    </div>
    </>
  )
}

export default App
