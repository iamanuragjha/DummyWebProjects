console.log('Welcome to the Animation Window!');

var myImg = document.getElementById('myImg');
var clouds= document.getElementById('clouds');
var planes = document.getElementById('planes');
var hotairballoon = document.getElementById('hotairballoon');


myImg.onclick = function(){
    if(clouds.style.webkitAnimationPlayState == "paused")
    {
        clouds.style.webkitAnimationPlayState = "running";
        planes.style.webkitAnimationPlayState = "running";
        hotairballoon.style.webkitAnimationPlayState = "running";
        myImg.src = "pause.png";
    }
    else
    {
        clouds.style.webkitAnimationPlayState = "paused";
        planes.style.webkitAnimationPlayState = "paused";
        hotairballoon.style.webkitAnimationPlayState = "paused";
        myImg.src = "play.png";
    }
} 