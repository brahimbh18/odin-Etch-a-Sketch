const grid = document.querySelector('.grid');
const GRID_DIMENTIONS = 600;



function loadPage() {
    grid.innerHTML = "";
    var l = document.querySelector("#size").value;
    var color = document.querySelector("#color").value;
    
    makeGrid(l, color);
}


function makeGrid(l, color) {
    
    document.querySelector(".size").textContent = l;

    n = (GRID_DIMENTIONS / l) - 2;
    for (i = 1; i < l*l +1; i++) {
        var square = document.createElement("div");
        square.classList.add('square');
        square.setAttribute("id", i);
        
        square.style.width = `${n}px`;
        square.style.width = `${n}px`;
        grid.appendChild(square);
        changeColor(square, color);
       
    }

}
function changeColor(square, color) {
    
    square.addEventListener('mouseover', () => square.style.backgroundColor = color);
}


function click() {
    var l = document.querySelector("#size").value;
    var color = document.querySelector("#color").value;
    
    makeGrid(l, color);
}

loadPage();
