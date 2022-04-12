const baseUrl="https://localhost:5001/api/Song";
var songList=[];
var mySong = {};

function handleOnLoad() {
    displaySongs();
}

function displaySongs(){
    const allSongsApiUrl = baseUrl;
    fetch(allSongsApiUrl).then(function(response){ 
        //console.log("made it");
        return response.json();
    }).then(function(json) { //asyncronous call
        console.log(json);
        songList=json;
        let html ="";
          songList.forEach((song) => {
            html += `<br></br> <div class="card col-md-4 bg-dark text-white"> <br></br>
            <img src="./resources/images/music.jpeg" class="card-img" alt="...">
            <div class="card-img-overlay">
                <h5 class="card-title">${song.songTitle}</h5>
            </div>
        </div>`;
        })
        document.getElementById("cards").innerHTML=html;
    }).catch(function(error) {
        console.log(error);
    });
}

function addSong(){
    console.log("made it to post")
    const putSongApiUrl = baseUrl;
    const sendSong = {
        songTitle : document.getElementById("postTitle").value,
    }
    fetch(putSongApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendSong)
    })
    .then((response)=>{
        mySong = sendSong;
        console.log(mySong);
    });
}

function favoriteSong(){
    const putSongApiUrl = baseUrl;
    const sendSong = {
        songTitle : document.getElementById("putTitle").value,
    }
    fetch(putSongApiUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendSong)
    })
    .then((response)=>{
        mySong = sendSong;
        console.log(mySong);
    });
}

function deleteSong() {
    console.log("made it to delete");
    const deleteSongApiUrl = baseUrl;
    const sendSong = {
        songTitle : document.getElementById("deleteTitle").value,
    }
    fetch(deleteSongApiUrl, {
        method: "DELETE",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendSong)
    })
    .then((response)=>{
        mySong = sendSong;
        console.log(mySong);
    });
}
