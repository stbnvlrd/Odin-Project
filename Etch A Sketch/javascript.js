// Variable declarations
const container = document.querySelector('#container');
const informationDiv = document.createElement('div');
const buttonCreateGrid = document.createElement('button');
const informationText = document.createElement('p');
const gridAreaDiv = document.createElement('div');
var colorInput = document.createElement("INPUT");
colorInput.setAttribute("type", "color");

const square = document.createElement('div');
let size = 16;
let count = 0;

// Text filling
informationText.innerHTML = "The size of the grid is: "
buttonCreateGrid.innerHTML = "Declare size";

// Information div styling
informationDiv.classList.add('info');
informationDiv.style.display = "flex";
informationDiv.style.flexWrap = "wrap";
informationDiv.style.alignContent = "center";
informationDiv.style.justifyContent = "center";
informationDiv.style.height = "140px";
informationDiv.style.width = "180px";     
informationDiv.style.backgroundColor = "white";
informationDiv.style.border =  "thick solid #666666";
informationDiv.style.margin = "30px";
informationDiv.style.borderRadius = "10px";

// Grid area div styling
gridAreaDiv.classList.add('gridAreaDiv');
gridAreaDiv.style.display = "flex";
gridAreaDiv.style.flexWrap = "wrap";
gridAreaDiv.style.height = "960px";
gridAreaDiv.style.width = "960px";
gridAreaDiv.style.backgroundColor = "white";
gridAreaDiv.style.border =  "thick solid #666666";

// Append Childrens
container.appendChild(informationDiv);
container.appendChild(gridAreaDiv);
informationDiv.appendChild(colorInput);
informationDiv.appendChild(buttonCreateGrid);
informationDiv.appendChild(informationText);

// Function to create the Grid
function createGrid(e) {
   let division = ((960)/(size)-1);
   square_size = division.toString() + "px"

   informationText.innerHTML = "The size of the grid is: " + size;
    

   for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid_square');
    square.style.border =  "0.5px solid black";
    square.style.height = square_size;
    square.style.width = square_size;
    gridAreaDiv.appendChild(square);
    

    console.log(square.classList.value);
    } 
    count = count + 1;
    const divs = gridAreaDiv.querySelectorAll('div');
    divs.forEach(div => div.addEventListener('mouseover', colorGrid));
    
}

// Function to reset the Grid
function resetGrid(e) {
    size = parseInt(prompt("Declare the size of the box"));
 
    let division = ((960)/(size)-1);
    square_size = division.toString() + "px"
    gridAreaDiv.innerHTML = "";
    createGrid()


}

// Function to color the Grid
function colorGrid(e){
    console.log(this.classList.value)
    var color = colorInput.value;
    if (this.classList.value == "grid_square") {
        this.style.backgroundColor = color;
      }
}


buttonCreateGrid.addEventListener("click", resetGrid);
createGrid()





