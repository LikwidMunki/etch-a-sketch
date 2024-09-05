/*
SEQUENCE: Draw a 16x16 grid of square divs on the page as default
WHILE: mouse hovers over the div, change the background colour of the square
IF: 'Change Grid Size' Button is pressed, present a prompt with input of how many square on either side
    GET: the input value and create a new grid with that many squares on either side
*/

//Set Global Variables

const gridSizeBtn = document.getElementById(`gridSizeBtn`);
const container = document.getElementById(`container`);

//Set the initial 16x16 grid

    for(let i=0; i < 16; i++) {

        const row = document.createElement(`div`);
        row.style.display = `flex`;
        row.classList.add(`row`);

        for(let j=0; j < 16; j++){
            const element = document.createElement(`div`);
            element.className = `grid-box`;
            element.style.width = `31.25px`;
            element.style.height = `31.25px`;
            element.style.border = `1px black solid`;
            element.style.boxSizing = `border-box`;
            element.style.backgroundColor = `white`;
            row.appendChild(element);
        }
        container.appendChild(row);
    }

//Function for generating prompt on button click with input

gridSizeBtn.addEventListener(`click`, () => {
 const gridSize = prompt(`Enter the size of the grid`, `16`);
 updateGridSize(gridSize);
});

//Create canvas

function updateGridSize(size) {
    container.innerHTML = ``;

    const boxSize = 500 / size;

    for(let i=0; i < size; i++) {

        const row = document.createElement(`div`);
        row.style.display = `flex`;
        row.classList.add(`row`);

        for(let j=0; j < size; j++){
            const element = document.createElement(`div`);
            element.className = `grid-box`;
            element.style.width = `${boxSize}px`;
            element.style.height = `${boxSize}px`;
            element.style.border = `1px black solid`;
            element.style.boxSizing = `border-box`;
            element.style.backgroundColor = `white`;
            row.appendChild(element);
        }
        container.appendChild(row);
    }
}




