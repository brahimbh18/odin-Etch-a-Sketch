const grid = document.querySelector('.grid');
const GRID_DIMENTIONS = 600;

var l = 15;
n = (GRID_DIMENTIONS / l) - 2.67;
for (i = 0; i < l*l; i++) {
    var gridItem  = document.createElement("div");
    gridItem .classList.add('grid-item');
    gridItem.style.width = `${n}px`;
    gridItem.style.width = `${n}px`;
    gridItem.addEventListener('mouseover',() => {gridItem.classList.add('hovered')});
    //square.addEventListener('mouseover',() => console.log(square.className));
    grid.appendChild(gridItem);
}