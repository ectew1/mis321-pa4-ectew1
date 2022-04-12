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

// function editSong() {
//     const putSongApiUrl = baseUrl;
//     const sendBook = {
//         title: document.getElementById("bookTitle").value,
//         author: document.getElementById("bookAuthor").value,
//         genre: document.getElementById("bookGenre").value,
//         numAvlb: parseInt(document.getElementById("bookAvlb").value),
//         isbn: document.getElementById("bookIsbn").value,
//         length: parseInt(document.getElementById("bookLength").value),
//         cover: document.getElementById("bookCover").value
//     }
//     fetch(postBookApiUrl, {
//         method: "POST",
//         headers: {
//             "Accept": 'application/json',
//             "Content-Type": 'application/json',
//         },
//         body: JSON.stringify(sendBook)
//     })
//     .then((response)=>{
//         myBook = sendBook;
//         populateList();
//         blankFields();
//     });
// }

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

function favoriteSong() {
    
}

function handleOnChange() {
    const selectedId = document.getElementById("selectListBox").value;
    songList.forEach((song) => {
        if(song.SongID == selectedId) {
            mySong = song;
            populateForm();
        }
    })
}

function populateForm() {
    document.getElementById("songTitle").value = mySong.SongTitle; //where did just "title" come from?
    // document.getElementById("bookAuthor").value = myBook.author;
    // document.getElementById("bookGenre").value = myBook.genre;
    // parseInt(document.getElementById("bookAvlb").value = myBook.avlb);
    // document.getElementById("bookIsbn").value = myBook.isbn;
    // parseInt(document.getElementById("bookLength").value = myBook.length);
    // document.getElementById("bookCover").value = myBook.cover;
}

function putBook(id) {
    const putBookApiUrl = baseUrl + "/" + id;
    const sendBook = {
        id: id,
        title: document.getElementById("bookTitle").value = myBook.title,
        author: document.getElementById("bookAuthor").value = myBook.author,
        genre: document.getElementById("bookGenre").value = myBook.genre,
        avlb: parseInt(document.getElementById("bookAvlb").value = myBook.avlb),
        isbn: document.getElementById("bookIsbn").value = myBook.isbn,
        length: parseInt(document.getElementById("bookLength").value = myBook.length),
        cover: document.getElementById("bookCover").value = myBook.cover
    }
    fetch(allBooksApiUrl + "/" + id, { 
        method: "PUT", //this is the name of the method in the controller
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify()
    })
    .then((reponse)=> {
        myBooks = sendBook;
        populateList();
        blankFields();
    })
}

// function findSongs(){
//     let searchString = document.getElementById("searchSong").value;

//     url += searchString;

//     console.log(searchString)

//     fetch(baseUrl).then(function(response) {
// 		console.log(response);
// 		return response.json();
// 	}).then(function(json) {
//         console.log(json)
//         let html = ``;
// 		json.forEach((song) => {
//             console.log(song.title)
//             html += `<div class="card col-md-4 bg-dark text-white">`;
// 			html += `<img src="./resources/images/music.jpeg" class="card-img" alt="...">`;
// 			html += `<div class="card-img-overlay">`;
// 			html += `<h5 class="card-title">`+song.title+`</h5>`;
//             html += `</div>`;
//             html += `</div>`;
// 		});
		
//         if(html === ``){
//             html = "No Songs found :("
//         }
// 		document.getElementById("searchSongs").innerHTML = html;

// 	}).catch(function(error) {
// 		console.log(error);
// 	})
// }