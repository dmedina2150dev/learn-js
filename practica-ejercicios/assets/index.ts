import MediaPlayer from './mediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import AdsPlugin from './plugins/Ads';



const video = document.querySelector("video");
const buttomPlay: HTMLElement = document.querySelector("#playButton");
const buttomMute: HTMLElement = document.querySelector("#muteButton");


const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(), new AutoPause(), new AdsPlugin()
]});

buttomPlay.onclick = () => player.togglePlay();
buttomMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(new URL('/sw.js')).catch(error => {
        console.log(error.message);
    });
  }