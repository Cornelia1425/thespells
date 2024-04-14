import React, { useState } from 'react'
import './App.css'
import ToggleDark from './components/ToggleDark' 
import SpellList from './components/SpellList'

function App() {

  const [isLumos, setIsLumos]  = useState (true)
  function handleLumosMode(){
    setIsLumos((isLumos)=>!isLumos)
    console.log(isLumos)
  }

  return (
    <div className={"App "+ (isLumos? "Lumos" : "Nox")}>
     <ToggleDark isLumos={isLumos} handleLumosMode={handleLumosMode}/>
    <SpellList />
    </div>
  )
}

export default App
