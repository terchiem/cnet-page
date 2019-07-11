const latestItems = document.querySelectorAll('.latest-story-item');
const smallCards = document.querySelectorAll('.card-sm');
const largeCards = document.querySelectorAll('.card-lg');
const mediaCards = document.querySelectorAll('.media-card');

latestItems.forEach((item) => {
  const image = item.querySelector('img');
  image.src = randomImage('s', randomNumber(20));
});

smallCards.forEach((item) => {
  const image = item.querySelector('img');
  image.src = randomImage('m', randomNumber(20));
});

largeCards.forEach((item) => {
  item.style.backgroundImage = `url("${randomImage('l', randomNumber(9))}")`;
});

mediaCards.forEach((item) => {
  item.style.background = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${randomImage('l', randomNumber(9))}")`;
  item.style.backgroundSize = "cover";
});


function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function randomImage(tag, num) {
  return `assets/${tag}(${num}).jpg`;
}