import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  width: 640,
});

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
console.log(`currentTime`, currentTime);

const throttleFunc = throttle(evt => {
  console.log(`play time`, evt.seconds);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds));
}, 1000);

player.on('timeupdate', throttleFunc);

player.setCurrentTime(currentTime).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;

    default:
      // some other error occurred
      break;
  }
});
