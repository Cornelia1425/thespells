import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import SpellDetail from './SpellDetail'

export default function SpellList({displaySpell}) {
    const [isList,setIsList] = useState({data:[]})
    useEffect(()=>{
        fetch('https://api.potterdb.com/v1/spells')

        .then((response)=>response.json())

        .then(spells=>setIsList(spells))
    
    },[])
    // const spellsToDisplay = isList.data.forEach(spell=>{
    return(
        <>

            <SpellDetail spell={spell}/>
            {isList.data.map((spell,i)=> (
                <button key={i} onClick={displaySpell}
                >{spell.attributes.name}</button>
            ))}

           
        </>
    )
}