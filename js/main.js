'use strict';

{
  const musicclick = document.getElementById('musicclick');
  const musicoverlay = document.querySelector('.musicoverlay');
  const close = document.getElementById('close');

  musicclick.addEventListener('click', () => {
    musicoverlay.classList.add('showmusic');
  });

  close.addEventListener('click', () => {
    musicoverlay.classList.remove('showmusic');
  });

  const travelclick = document.getElementById('travelclick');
  const traveloverlay = document.querySelector('.traveloverlay');

  travelclick.addEventListener('click', () => {
    traveloverlay.classList.add('showmusic');
  });

  const cinemaclick = document.getElementById('cinemaclick');
  const cinemaoverlay = document.querySelector('.cinemaoverlay');

  cinemaclick.addEventListener('click', () => {
    cinemaoverlay.classList.add('showmusic');
  });

  const baskeclick = document.getElementById('baskeclick');
  const baskeoverlay = document.querySelector('.baskeoverlay');

  baskeclick.addEventListener('click', () => {
    baskeoverlay.classList.add('showmusic');
  });

  const fashionclick = document.getElementById('fashionclick');
  const fashionoverlay = document.querySelector('.fashionoverlay');

  fashionclick.addEventListener('click', () => {
    fashionoverlay.classList.add('showmusic');
  });

  const programmerclick = document.getElementById('programmerclick');
  const programmeroverlay = document.querySelector('.programmeroverlay');

  programmerclick.addEventListener('click', () => {
    programmeroverlay.classList.add('showmusic');
  });
}

