import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTime = +localStorage.getItem('videoplayer-current-time') || 0;
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(currentTime);
player.on('timeupdate', throttle(() => {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds)
  });
}, 1000));