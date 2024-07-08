let gridContainer = document.querySelector('.grid-container');
gridContainer.style.width = '800px';
gridContainer.style.height = '800px';
for (i = 1; i <= (16 ** 2); i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add(`grid-square`);
    gridSquare.classList.add(`square${i}`);
    let squareSize = (800 / 16);
    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.height = `${squareSize}px`;
    gridContainer.appendChild(gridSquare);
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'black';
    });
}

let gridSizeButton = document.querySelector('.grid-size-button');
gridSizeButton.addEventListener('click', () => {
    let newGridSizePrompt = prompt('Enter a whole number between 10-100 to change the number of squares per row.');
    let newGridSize = Number(newGridSizePrompt.slice(0));
    if ((newGridSizePrompt === '') || isNaN(newGridSize)) {
        alert('Invalid grid size: please enter a number.')
    } else if (newGridSize !== parseInt(newGridSize)) {
        alert('Invalid grid size: please enter a whole number.')
    } else if (newGridSize < 10) {
        alert('Invalid grid size: number must be greater than or equal to 10.')
    } else if (newGridSize > 100) {
        alert('Invalid grid size: number must be less than or equal to 100.')
    } else {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        };
        for (i = 1; i <= (newGridSize ** 2); i++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add(`grid-square`);
            gridSquare.classList.add(`square${i}`);
            let squareSize = (800 / newGridSize).toFixed(100);
            gridSquare.style.width = `${squareSize}px`;
            gridSquare.style.height = `${squareSize}px`;
            gridContainer.appendChild(gridSquare);
            gridSquare.addEventListener('mouseover', () => {
                gridSquare.style.backgroundColor = 'black';
            });
        }
        gridSizeButton.textContent = `${newGridSize}`;
    }
});