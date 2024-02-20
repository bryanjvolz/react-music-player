//TODO: use https://www.npmjs.com/package/music-metadata to:
// Read in files from file system
// read the data - title, author, track number, album, etc.
// loop and set into the Tracks object

import fleshEaters from './albums/01-Prayer-Line-Flesh-Eaters.mp3';
import vaderBomb from './albums/02-Vaderbomb-El-Santo-Contra-Los-Monstruos.mp3'
import cover from './albums/cover.png';
import thief from './albums/05 Thief.mp3';
import myth from './albums/09 Myth.mp3';
import kinghorseCover from './albums/kinghorse-1998.jpg';

const tracks = [
  {
    title: 'Flesh Eaters',
    src: fleshEaters,
    author: 'Prayer Line',
    thumbnail: cover,
  },
  {
    title: 'El Santo Contra Los Monstruois',
    src: vaderBomb,
    author: 'Vaderbomb',
    thumbnail: cover
  },
  {
    title: 'Thief',
    src: thief,
    author: 'Kinghorse',
    thumbnail: kinghorseCover,
  },
  {
    title: 'Myth',
    src: myth,
    author: 'Kinghorse',
    thumbnail: kinghorseCover,
  }
];

export default tracks;