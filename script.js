const grid = document.querySelector('.grid');
const GRID_DIMENTIONS = 600;

var l = 3;
n = (GRID_DIMENTIONS / l) - 2.67;
for (i = 0; i < l*l; i++) {
    var square = document.createElement("div");
    square.classList.add('square');
    square.style.width = `${n}px`;
    square.style.width = `${n}px`;
    square.addEventListener('mouseover',() => square.classList.add('hovered'));
    grid.appendChild(square);
}