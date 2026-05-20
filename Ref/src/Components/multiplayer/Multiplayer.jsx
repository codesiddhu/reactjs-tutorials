import Display from "./Display";

function Multiplayer() {
    let songs = [
        {
            id: 1,
            movieName: "paradise",
            path: "../../../public/Aaya Sher.mp3"
        },
        {
            id :2,
            movieName:"Peddi",
            path:"../../../public/Chikiri Chikiri.mp3"
        }
    ];
  return (
    <div>
        <Display songs = {songs}/>
    </div>
    
    

  )
}

export default Multiplayer