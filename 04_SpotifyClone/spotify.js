console.log("welcome to spotify");

// ========================================= initialise the variables =========================================>
let songIndex = 0;
let gif = document.getElementById('gif');
let audioElement = new Audio('songs/1.mp3');
let masterSongName = document.getElementById('masterSongName');
let masterPlay = document.getElementById('masterPlay');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName : "Amplifier", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName : "Satisfya", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName : "Blue Eyes", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName : "High Heels", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName : "Designer", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName : "Lahore", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName : "High Rated Gabru", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName : "Asal Mein", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName : "Ek Tarfa", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"}
]

songItems.forEach((element,i)=>{
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
// audioElement.play();

//Handle Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// ============================================= Events Section =============================================>



audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// ----------------------------- when user click on small-pause/play button --------------------------------->
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// ----------------------- when user click on "next-song-play"(fa-step-forward) button ----------------------->
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9)
    {
        songIndex = 0;
    }
    else
    {
        songIndex += 1;
    }

    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// ------------------------- when user click on "prev-song-play"(fa-step-backward) button ----------------------->
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex < 0)
    {
        songIndex = 9;
    }
    else
    {
        songIndex -= 1;
    }

    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
