const GRID = document.querySelector(".grid");

var boardSize = document.querySelector("#Bsize");
var boardSize1 = document.querySelector("#Bsize1");

var gridSize = document.querySelector("#Gsize");
var gridSize1 = document.querySelector("#Gsize1");

boardSize.addEventListener('change', () => {
    boardSize1.value = boardSize.value;
    loadPage();
});
boardSize1.addEventListener('change', () => {
    boardSize.value = boardSize1.value;
    loadPage();
});

gridSize.addEventListener('change', () => {
    gridSize1.value = gridSize.value;
    loadPage();
});
gridSize1.addEventListener('change', () => {
    gridSize.value = gridSize1.value;
    loadPage();
});


color.addEventListener('change', () => changeBoardColor()); 
pen.addEventListener('click', () => hovered());
eraser.addEventListener('click', () => erasePen());
clear.addEventListener('click', () => clearBoard());
rgb.addEventListener('click', () => rgbPen());
op.addEventListener('click', () => opacityPen());


function loadPage(){
    GRID.innerHTML = "";
    var bsize = boardSize.value;
    var gsize = gridSize.value; 
    GRID.style.width = `${bsize}px`;
    GRID.style.height = `${bsize}px`;
    
    makeGrid(bsize, gsize);
}

function makeGrid(bsize, gsize) {
   
    for (i = 1; i <= gsize*gsize; i++) {
        var gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        //gridItem.ssetAttribute("draggable", false);
        gridItem.style.width = `${(bsize / gsize)}px`;
        gridItem.style.height = `${(bsize / gsize)}px`;

        GRID.appendChild(gridItem);
      
    }
    hovered()
}

function hovered() {

    const gridItems = Array.from(document.querySelectorAll('.grid-item'));
    gridItems.forEach((gridItem) => {
        
        var events = ["mousedown", "mouseover"];
        events.forEach((event) => {
            gridItem.addEventListener(event, function(e){
                if(e.buttons == 1 || e.buttons == 3){
                    gridItem.style.backgroundColor = pen.value;
                }
            })
        })
        
    })

    }    

function erasePen() {
    console.log(color.value);
    const gridItems = Array.from(document.querySelectorAll('.grid-item'));
    gridItems.forEach((gridItem) => {
        
        var events = ["mousedown", "mouseover"];
        events.forEach((event) => {
            gridItem.addEventListener(event, function(e){
                if(e.buttons == 1 || e.buttons == 3){
                    gridItem.style.removeProperty('background-color');
                }
            })
        })
        
    })}
function clearBoard() {
    const gridItems = Array.from(document.querySelectorAll('.grid-item'));
    gridItems.forEach((gridItem) => gridItem.style.removeProperty('background-color'));
    
}

function changeBoardColor() {
  
    GRID.style.backgroundColor = color.value;

}

function rgbPen() {
    const gridItems = Array.from(document.querySelectorAll('.grid-item'));
    gridItems.forEach((gridItem) => {
        
        var events = ["mousedown", "mouseover"];
        events.forEach((event) => {
            gridItem.addEventListener(event, function(e){
                if(e.buttons == 1 || e.buttons == 3){
                    gridItem.style.backgroundColor = `${randomColor()}`;
                }
            })
        })
        
    })
}
function opacityPen() {
    const gridItems = Array.from(document.querySelectorAll('.grid-item'));
    gridItems.forEach((gridItem) => {
        
        var events = ["mousedown", "mouseover"];
        events.forEach((event) => {
            var n = 10;

            gridItem.addEventListener(event, function(e){
                if(e.buttons == 1 || e.buttons == 3){
                    gridItem.style.opacity = `${n}%`;
                    gridItem.style.backgroundColor = op.value;
                    console.log(n);        
                    
                    n += 10;
                    console.log(n);
                }
            })
        })
        
    })
}

function randomColor () {
    var color = Math.floor(Math.random()*16777215).toString(16);
    return '#' + color;

}

loadPage();


  