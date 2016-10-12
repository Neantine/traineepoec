/**
 * Created by Administrateur on 04/08/2016.
 */



//Qd on passe la souris sur le lecteur, la barre de controle apparait
// Qd la souris ressort de la zone, la barre de controle disparait
let videoPlayer = document.querySelector(".video-player");
let videoControls = document.querySelector(".video-player__controls");
let videoElmt = document.getElementsByTagName("video");
videoElmt.autoplay = 0;
videoElmt.loop = 0;

console.log(videoElmt);

// console.log(videoControls);
// console.log(videoPlayer);


function addButtonsListeners() {


    //Controle de la video sur les boutons
    let playButton = document.querySelector(".play_button");
    let stopButton = document.querySelector(".stop_button");
    let pauseButton = document.querySelector(".pause_button");

    console.log("addButtonsListeners ", playButton);

    playButton.addEventListener('click', function play(e)
        {
            console.log("click : playvideo");
            e.stopPropagation();
            e.preventDefault(e);
            console.log(videoElmt);
            videoElmt[0].play();
        }
    )
    ;
    pauseButton.addEventListener('click', function pause(e)
        {
            console.log("click : pausevideo");
            e.stopPropagation();
            e.preventDefault(e);
            videoElmt[0].pause();
        }
    )
    ;
    stopButton.addEventListener('click', function stop(e)
        {
            console.log("click : stopvideo");
            e.stopPropagation();
            e.preventDefault(e);
            videoElmt[0].currentTime = 0;
        }
    )
    ;
};

function removeButtonsListeners() {

    console.log("removeButtonsListeners: ");

    //Controle de la video sur les boutons
    let playButton = document.querySelector(".play_button");
    let stopButton = document.querySelector(".stop_button");
    let pauseButton = document.querySelector(".pause_button");

    playButton.removeEventListener('click',"play");
    pauseButton.removeEventListener('click',"pause");
    stopButton.removeEventListener('click',"stop");
};

videoPlayer.addEventListener('mouseenter', function(e) {
    console.log("mouseenter: ", e);

     e.preventDefault(e);
     e.stopPropagation();

    videoControls.classList.remove("hiddenControls");
    videoControls.classList.add("visibleControls");

    addButtonsListeners();

    //videoControls.removeEventListener('mouseover', "showControls");
    }
);

videoPlayer.addEventListener('mouseleave', function(e) {
        console.log("mouseleave: ", e);
        e.preventDefault(e);
        e.stopPropagation(e);
        videoControls.classList.add("hiddenControls");
        videoControls.classList.remove("visibleControls");
        removeButtonsListeners();
    }

);


