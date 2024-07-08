let gridContainer = document.querySelector('.grid-container');
for (i = 1; i <= 256; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add(`grid-square`);
    gridSquare.classList.add(`square${i}`);
    gridContainer.appendChild(gridSquare);
}