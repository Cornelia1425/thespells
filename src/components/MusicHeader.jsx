import React, {useState} from 'react'


export default function MusicHeader (){

 

    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isSnitchFly, setIsSnitchFly] = useState (false)

    const handleClick =()=>{
        const audio = document.querySelector('.audio')

        if (audio.paused) {
            audio.loop=true;
            audio.play();
            setIsSnitchFly(true);
            setIsAudioPlaying(true); //this controls the play button
          } else {
            audio.loop=false;
            audio.pause();
            setIsSnitchFly(false);
            setIsAudioPlaying(false);
          }
        }

    function handleFlyClickOnly (){
        setIsSnitchFly(!isSnitchFly)

    }

   

    return(
        <>
             {/*    title */}
            <h1 id="iopenattheclose" className="play-btn" onClick={handleFlyClickOnly}>I Open at the Close</h1>
     

            {/*  /* golden snitch and music */}
            <div className="audio-player">
   
                <audio src="./src/assets/audio/01 - Prologue.mp3" className="audio"></audio>

              {/*   <button className="play-btn" onClick={handleClick}>
                    {isAudioPlaying ? 'Pause' : 'Play'}
                </button> */}

                <audio className="audio" onEnded={handleClick} src="./src/assets/audio/01 - Prologue.mp3" />
                    {/* Audio source */}
                    <img id = "snitchfly" className="play-btn"  alt="Snitch Fly" onClick={handleFlyClickOnly} src={isSnitchFly? "./src/assets/img/0_snitchfly.gif":  "./src/assets/img/0_snitchfly.png"  }/>
               

                    <img className="play-btn" onClick={handleClick}  src={isAudioPlaying ? "./src/assets/img/19_pause_darkyellow.png"  : "./src/assets/img/18_play_darkyellow.png" } />
                   
       
        
            </div>

        </>

    )
}
