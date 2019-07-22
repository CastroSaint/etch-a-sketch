// elements from html

const gridContainer = document.querySelector('#gridContainer');
const resetBtn = document.querySelector('#resetBtn');
const resizeBtn = document.querySelector('#resizeBtn');
const randomBtn = document.querySelector('#randomBtn');
const defaultBtn = document.querySelector('#defaultBtn');

// global variables

let ogSize = 16;

// event listeners

resetBtn.onclick = resetGrid;
resizeBtn.onclick = resizeGrid;
randomBtn.onclick = randomColourChange;
defaultBtn.onclick = colourChange;

// creates a grid

function createGrid(size) {
    // create columns and rows
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);
    }

    colourChange();
}

// changes square colour to default blue

function colourChange() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'rgba(0, 0, 255, 0.856)';
        });
    });
}

// changes square colour to a random selection of colours

function randomColourChange() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        const rand1 = Math.floor(Math.random() * 255);
        const rand2 = Math.floor(Math.random() * 255);
        const rand3 = Math.floor(Math.random() * 255);

        square.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = `rgba(${rand1}, ${rand2}, ${rand3})`;
        });
    });
}

// changes the size of the grid based on user input

function resizeGrid() {
    let newGrid = prompt('Enter a number to change the grid size');
    
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    createGrid(newGrid);
}

// resets the grid

function resetGrid() {
    const resetSquare = document.querySelectorAll('.square');

    resetSquare.forEach(square => {square.style.backgroundColor = 'rgba(189, 163, 15, 0.952)';
    });
}

// creates default 16x16 grid

createGrid(ogSize);