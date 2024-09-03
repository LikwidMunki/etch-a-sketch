/*
SEQUENCE: Draw a 16x16 grid of square divs on the page as default
WHILE: mouse hovers over the div, change the background colour of the square
IF: 'Change Grid Size' Button is pressed, present a prompt with input of how many square on either side
    GET: the input value and create a new grid with that many squares on either side
*/

//Set Global Variables

const gridSizeBtn = document.getElementById(`gridSizeBtn`);
const container = document.getElementById(`container`);
const grid = document.getElementById(`grid`);

//Function for generating prompt on button click with input

gridSizeBtn.addEventListener(`click`, () => {
 const gridSize = prompt(`Enter the size of the grid`, `16`);
 updateGrid(gridSize);
});

//Set Default Grid
const defaultGrid = 16;



//Create square divs


//Create hover effect




