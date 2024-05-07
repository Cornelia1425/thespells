import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'

// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
  
// challenge 0: here we display all spells
const displaySpells = () => {

    // here we display all spells as buttons
    fetch('https://api.potterdb.com/v1/spells')

    .then((response)=>response.json())

    .then(spells =>{
        spells.data.forEach(spell=>{

        const name = document.createElement("button")
        name.textContent = spell.attributes.name
        // document.querySelector("#spell").appendChild(name)

        name.addEventListener("click", event =>{
            event.preventDefault();
            displayspell(spell)

        })

    })
   
})
}


function displayspell (spell){

    document.querySelector("#spellName").textContent = spell.attributes.name || "Not Found 🥲"
    document.querySelector("#spellHand").textContent = spell.attributes.hand || "Not Found 🥲"
    document.querySelector("#spellIncantation").textContent = spell.attributes.incantation || "Not Found 🥲"
    document.querySelector("#spellImg").src = spell.attributes.image || './src/assets/img/21_wandPlaceholder.png'
}

    //this is playing Expelliarmus incantation audio. it worked!
    const audioElement = new Audio('./src/assets/audio/7_Expelliarmus.mp3');
    const pElement = document.getElementById('myAudio');

    pElement.addEventListener('click', () => {
    audioElement.play();
    });


// challenge 0: here we display all spells
const init = ()=>{
    const form =document.querySelector('form')
    form.addEventListener('submit', (event) =>{
        event.preventDefault()
        const input = document.querySelector('input#searchBySpellName')
    


        //same thing just add a search filter

        /* .then(spells =>{
            spells.data.forEach(spell=>{
            const name = document.createElement("button")
            name.textContent = spell.attributes.name
            document.querySelector("#spell").appendChild(name)
            name.addEventListener("click", event =>{
                event.preventDefault();
                displayspell(spell)
            })
 */
        // here we grab value by input
        fetch(`https://api.potterdb.com/v1/spells/?filter[name_cont]=${input.value}`)
            .then((res)=>res.json())
            .then((spells)=>{
           /*      console.log("spells: ", spells)
                const searchSpells =spells.data
                console.log("spells.data: ", spells.data)
                const searchSpellsName =searchSpells.map(searchSpells =>searchSpells.attributes.name)
                console.log("searchSpellsName: ", searchSpellsName) */

            
                const searchResultsContainer = document.querySelector("p#searchBySpellName")
                searchResultsContainer.innerHTML = "" //add before the loop, clear the existing search result

                spells.data.forEach(spell=>{
                const searchSpellName = document.createElement("p")
                searchSpellName.textContent = spell.attributes.name
                document.querySelector("p#searchBySpellName").appendChild(searchSpellName)
                //add eventListener
                searchSpellName.addEventListener("click", event =>{
                    event.preventDefault();
                    displayspell(spell)
                })
                })

                // spells.data.forEach(spellinfo=>{
                // //console.log(spells)
                // const name = document.querySelector('section#SpellDetailsBySearch p.name')
                // name.textContent = spellinfo.attributes.name
                // //displayspell(spell)
                // })
            })
    })
}

const main = () =>{
    displaySpells()
    init ()
}

main()


/* const playBtn = document.querySelector('.play-btn');
const audio = document.querySelector('.audio');

playBtn.addEventListener('click', function() {
if (audio.paused) {
audio.play();
playBtn.src = './assets/img/19_pause.png';
} else {
audio.pause();
playBtn.src = './assets/img/18_play.png';
}
}); */


const playBtn = document.querySelector('.play-btn');
const audio = document.querySelector('.audio');

playBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playBtn.src = '.src/assets/img/19_pause_darkyellow.png';
    //playBtn.src = './assets/img/0_snitchfly.gif';
    document.querySelector("#snitchfly").src = src=".src/assets/img/0_snitchfly.gif" 
  } else {
    audio.pause();
    // audio.currentTime = 0; // Reset the audio to the beginning
    playBtn.src = '.src/assets/img/18_play_darkyellow.png';
    //playBtn.src = './assets/img/0_snitchfly.png';
    document.querySelector("#snitchfly").src = src=".src/assets/img/0_snitchfly.png" 
  }
});

audio.addEventListener('ended', function() {
  playBtn.src = '.src/assets/img/18_play_darkyellow.png';
});

//https://api.potterdb.com/v1/spells/?filter[name_cont]=${blue}

