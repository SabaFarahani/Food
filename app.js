var index = 0;

var fade = setInterval(function () {
  fading();
}, 100);
setInterval(function () {
  slideShow();
}, 3000);

function slideShow() {
  var images = document.querySelector(".main").getElementsByTagName("img"); //its an array
  ++index;

  if (index == images.length) index = 0;

  if (index == 0) images[images.length - 1].style.display = "none";
  else images[index - 1].style.display = "none";

  images[index].style.display = "inline";
  images[index].style.opacity = 1;
  clearInterval(fade);
  fade = setInterval(function () {
    fading();
  }, 100);
}

function fading() {
  var images = document.querySelector(".main").getElementsByTagName("img");
  var opacity =
    images[index].style.opacity >= 0 ? images[index].style.opacity : 1;
  images[index].style.opacity = opacity - 0.025;
}
