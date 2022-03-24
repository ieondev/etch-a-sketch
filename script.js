let div = [];
let size = 16;
let width = 30;
let height = 30;

// Clear grid on button click
let button = document.getElementById("clear");
button.addEventListener("click", function clear() {
  deleteGrid();

  // Ask for size of new grid and create it
  size = prompt("How many squares per side?");
  while (size > 100 || size < 1 || isNaN(size)) {
    size = prompt("Enter a number between 1 and 100.");
  }
  createGrid();
})

// Create a webpage with a 16x16 grid of square divs
function createGrid() {
  width = 480 / size;
  height = 480 / size;
  for (let i = 0; i < size*size; i++) {
    div[i] = document.createElement("div");
    div[i].style.width = String(width) + "px";
    div[i].style.height = String(height) + "px";
    div[i].classList.add("grid");
  
    // Paint the divs on hover
    div[i].addEventListener("mouseover", function() {
      div[i].classList.add("hover");
    });
  
    // Display the grid
    document.getElementById("container").appendChild(div[i]);
  };
}

function deleteGrid() {
  for (let i = 0; i < size*size; i++) {
    div[i].remove();
  };
}
 // Initialize grid
createGrid(size);
