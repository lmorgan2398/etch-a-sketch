let gridContainer = document.querySelector('.grid-container');
for (i = 1; i <= (16 ** 2); i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add(`grid-square`);
    gridSquare.classList.add(`square${i}`);
    let squareSize = (600 / 16);
    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.height = `${squareSize}px`;
    gridContainer.appendChild(gridSquare);
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'black';
    });
}

let gridSizeButton = document.querySelector('.grid-size-button');
gridSizeButton.addEventListener('click', () => {
    let newGridSize = Number(prompt('Enter a whole number between 10-100 to change the number of squares per row.'));
    console.log(newGridSize);
    console.log(typeof(newGridSize));
    if (typeof (newGridSize) !== 'number') {
        alert('Invalid grid size: only numbers are accepted.')
    } else if (newGridSize < 10) {
        alert('Invalid grid size: number cannot be less than 10.')
    } else if (newGridSize > 100) {
        alert('Invalid grid size: number cannot be greater than 100.')
    } else {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        };
        for (i = 1; i <= (newGridSize ** 2); i++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add(`grid-square`);
            gridSquare.classList.add(`square${i}`);
            let squareSize = (600 / newGridSize);
            gridSquare.style.width = `${squareSize}px`;
            gridSquare.style.height = `${squareSize}px`;
            gridContainer.appendChild(gridSquare);
            gridSquare.addEventListener('mouseover', () => {
                gridSquare.style.backgroundColor = 'black';
            });
        }
    }
});