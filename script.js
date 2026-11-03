const colorButton = document.getElementById('colorButton');
const buttonColors = ['#e45b5b', '#28a879', '#e6a23c', '#5c6ac4'];
let colorIndex = 0;

colorButton.addEventListener('click', function () {
  colorButton.style.backgroundColor = buttonColors[colorIndex];
  colorIndex = (colorIndex + 1) % buttonColors.length;
});
