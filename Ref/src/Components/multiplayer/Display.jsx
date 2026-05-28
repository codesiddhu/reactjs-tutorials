import { useRef ,useState,useEffect} from "react";
function Display({songs}) {
    let musicref = useRef();
    let [play,setPlay] = useState(false);
    let [musicsrc,Setsrc] = useState(null);
    useEffect(()=>{
        let PlayMusic = (path)=>{
        musicref.current.src  = path
        if(path ===musicsrc){
            if (play){
                musicref.current.pause();
                setPlay(false);

            }
            else{
                musicref.current.play();
                setPlay(true);
            }
        
        }
        else{
            musicref.current.play();
                setPlay(true);
        }
    }

    },[PlayMusic])
    
  return (
    <div>
       {songs.map((song)=>{
        return (
            <div key={song.id}>
                <h1>{song.movieName}</h1>
                <audio ref={musicref} > 
                    <source src={song.path} type="audio/mpeg" />
                </audio>
                <button onClick={()=>{
                    PlayMusic(song.path);
                    Setsrc(song.path);
                }}>Play</button>
            </div>
        )
       })}
    </div>

  )
}

export default Display