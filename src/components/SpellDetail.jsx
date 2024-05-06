import React from 'react'


export default function SpellDetail ({spell}){

    return (

        <> 
        <div className="spellDetail">
            <p id="spellName">{spell.attributes.name || "Not Found 🥲"}</p>
            <p id="spellHand">{spell.attributes.hand || "Not Found 🥲"}</p>
            <p id="spellIncantation">{spell.attributes.incantation || "Not Found 🥲"}</p>
            <img id="spellImg" src={spell.attributes.image || './src/assets/img/21_wandPlaceholder.png'} alt="Spell" />
        </div>
        
        </>
    )
}