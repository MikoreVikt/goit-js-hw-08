import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

returnCarrentTime();

player.on(`timeupdate`, throttle(currentTime, 1000));

function currentTime(data) {
  localStorage.setItem(STORAGE_KEY, `${data.seconds}`);
}

function returnCarrentTime() {
  const saveTimeToPlay = localStorage.getItem(STORAGE_KEY);
  if (saveTimeToPlay) {
    player.setCurrentTime(saveTimeToPlay);
  }
}
