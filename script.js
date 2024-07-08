let gridContainer = document.querySelector('.grid-container');
gridContainer.style.width = '800px';
gridContainer.style.height = '800px';

let colorButton = document.querySelector('.color-button');
let blackButton = document.querySelector('.black-button');

let gridColor = 'black';

colorButton.addEventListener ('click', () => {
    gridColor = 'rgb';
});

blackButton.addEventListener ('click', () => {
    gridColor = 'black';
});

for (i = 1; i <= (16 ** 2); i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add(`grid-square`);
    gridSquare.classList.add(`square${i}`);
    let squareSize = (800 / 16);
    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.height = `${squareSize}px`;
    gridSquare.style.backgroundColor = 'white';
    let opacity = (0);
    gridContainer.appendChild(gridSquare);
    gridSquare.addEventListener('mouseover', () => {
        if (gridSquare.style.backgroundColor) {
            if (opacity < 1) {
                opacity += (0.1);
                console.log(opacity);
                gridSquare.style.opacity = opacity;
            };
        };
        if (gridColor === 'black') {
            gridSquare.style.backgroundColor = 'black';
        } else if (gridColor === 'rgb') {
            let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            let r = randomBetween(0, 255);
            let g = randomBetween(0, 255);
            let b = randomBetween(0, 255);
            let rgb = `rgb(${r},${g},${b})`;
            gridSquare.style.backgroundColor = rgb;
        }
    });
};

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
            gridSquare.style.backgroundColor = 'white';
            let opacity = (0);
            gridContainer.appendChild(gridSquare);
            gridSquare.addEventListener('mouseover', () => {
                if (gridSquare.style.backgroundColor) {
                    if (opacity < 1) {
                        opacity += (0.1);
                        console.log(opacity);
                        gridSquare.style.opacity = opacity;
                    };
                };
                if (gridColor === 'black') {
                    gridSquare.style.backgroundColor = 'black';
                } else if (gridColor === 'rgb') {
                    let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                    let r = randomBetween(0, 255);
                    let g = randomBetween(0, 255);
                    let b = randomBetween(0, 255);
                    let rgb = `rgb(${r},${g},${b})`;
                    gridSquare.style.backgroundColor = rgb;
                }
            });
        };
    };
        gridSizeButton.textContent = `${newGridSize}`;
});