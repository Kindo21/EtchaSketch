const container = document.getElementById("container");

let rows;
let cols;
let target;

/* set cells to an array somehow and then set attribute to all cells in array and write array to DOM.*/

function div(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    target = container.querySelector(".grid-item");
  }
}

div(16, 16);
function enter() {
    target.setAttribute("style", "background-color:black;")
}
/*function leave() {  
    target.setAttribute("style", "background-color:white;")
 }*/

target.addEventListener("mouseover", enter, false);
/*target.addEventListener("mouseout", leave, false);*/



