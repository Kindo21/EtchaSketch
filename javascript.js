const container = document.getElementById("container");
const resetContainer = document.getElementById("container2");

let rows;
let cols;
let target;
let userRows;
let userCols;

/* set cells to an array somehow and then set attribute to all cells in array and write array to DOM.*/

function div(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    
  }
}

div(16, 16);
/*function enter() {
    target.setAttribute("style", "background-color:black;")
}*/
/*function leave() {  
    target.setAttribute("style", "background-color:white;")
 }*/
 //target = container.querySelector(".grid-item");
document.querySelectorAll('.grid-item').forEach(target =>{
    //.addEventListener("mouseover", enter, false);
    target.addEventListener("mouseover", Event => {
        target.setAttribute("style", "background-color:black;")
    })
})

let reset = document.createElement("BUTTON");
reset.setAttribute("style", "height: 20px")
reset.textContent = 'Reset';
container2.appendChild(reset).className = "reset";
reset.addEventListener("click", function() {
    document.querySelectorAll('.grid-item').forEach(target => {
        target.setAttribute("style", "background-color:white;")
    }
        
    )
    let gridSize =  prompt("Set grid size!")
    div(gridSize, gridSize);
    document.querySelectorAll('.grid-item').forEach(target =>{
        //.addEventListener("mouseover", enter, false);
        target.addEventListener("mouseover", Event => {
            target.setAttribute("style", "background-color:black;")
        })
    })
})



/*target.addEventListener("mouseout", leave, false);*/



