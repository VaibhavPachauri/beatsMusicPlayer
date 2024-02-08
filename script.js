
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let msterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Warriyo - Mortals", filePath:"1.mp3", coverPath:"1.jpg"},
    {songName: "Cielo", filePath:"2.mp3", coverPath:"2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath:"3.mp3", coverPath:"3.jpg"},
    {songName: "Different Heaven & EHDE - My heart", filePath:"4.mp3", coverPath:"4.jpg"},
    {songName: "Janji - Heroes Tonight (feat. Johnning)", filePath:"5.mp3", coverPath:"5.jpg"},
    {songName: "Janji - Heroes Tonight (feat. Johnning)", filePath:"6.mp3", coverPath:"6.jpg"},
    {songName: "Janji - Heroes Tonight (feat. Johnning)", filePath:"7.mp3", coverPath:"7.jpg"},
    {songName: "Janji - Heroes Tonight (feat. Johnning)", filePath:"8.mp3", coverPath:"8.jpg"},
    {songName: "Janji - Heroes Tonight (feat. Johnning)", filePath:"9.mp3", coverPath:"9.jpg"},
    {songName: "Janji - Heroes Tonight (feat. Johnning)", filePath:"9.mp3", coverPath:"10.jpg"}
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src = "pause.svg";
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.src = "play.svg";
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value*audioElement.duration)/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.src = "play.svg";
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioElement.src = `${songIndex}.mp3`;
        msterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.src="pause.svg";
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    msterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src="pause.svg";
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    msterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    // e.target.src = "pause.svg";
    masterPlay.src="pause.svg";
})