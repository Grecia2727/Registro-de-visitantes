canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d'),
video = document.querySelector('video');
var dataURL = canvas.toDataURL();
console.log(dataURL);

start.addEventListener('click', function () {

navigator.getUserMedia({
  video: true
}, function (stream) {
  var src = window.URL.createObjectURL(stream);
  video.src = src;
}, function (e) {
  console.log(e);
});

capture.addEventListener('click', function () {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}, false);

}, false);

