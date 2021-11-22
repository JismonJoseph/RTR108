var numOfBoxes = 6;
var colors = generateRandomColors(numOfBoxes);
var container = document.querySelector('.container');
var squares = document.querySelectorAll('.box');
var pickedColor = pickColor();
var messageDisplay = document.querySelector('.message');
var correctDisplay = document.querySelector('.heading-sub');
var displayNavColor = document.querySelector('.nav-bar');
var newGame = document.querySelector('#newGame');
var easy = document.querySelector('#Easy');
var hard = document.querySelector('#Hard');
var medium = document.querySelector('#Medium');
var iconContainer = document.querySelector('#icon-container');
var icons = document.querySelectorAll('.icons');
newGame.addEventListener('click', newColors);

function newColors() {
    newGame.textContent = 'new colors'
    colors = generateRandomColors(numOfBoxes);
    pickedColor = pickColor();
    correctDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        RegeneratingBoxes(squares[i]);
    }
    messageDisplay.textContent = '';
    displayNavColor.style.backgroundColor = 'black';
    RegeneratingBoxes(displayNavColor);
    iconContainer.innerHTML = "";
    createIcons(3);
}

easy.addEventListener('click', easySelect);
medium.addEventListener('click', mediumSelect);
hard.addEventListener('click', hardSelect);

function easySelect() {
    numOfBoxes = 3
    medium.classList.remove('selected');
    hard.classList.remove('selected');
    easy.classList.add('selected');
    RegeneratingBoxes(container);
    colors = generateRandomColors(numOfBoxes);
    pickedColor = pickColor();
    correctDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    displayNavColor.style.backgroundColor = 'black';
    RegeneratingBoxes(displayNavColor);
    newGame.textContent = 'new colors'
    messageDisplay.textContent = '';
    iconContainer.innerHTML = "";
    createIcons(3);
}

function mediumSelect() {
    numOfBoxes = 6
    hard.classList.remove('selected');
    easy.classList.remove('selected');
    medium.classList.add('selected');

    RegeneratingBoxes(container);
    colors = generateRandomColors(numOfBoxes);
    pickedColor = pickColor();
    correctDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'inline-block'
        } else {
            squares[i].style.display = 'none';
        }
        squares[i].classList.remove('box-anim');
    }
    displayNavColor.style.backgroundColor = 'black';
    RegeneratingBoxes(displayNavColor);
    newGame.textContent = 'new colors'
    messageDisplay.textContent = '';
    iconContainer.innerHTML = "";
    createIcons(3);
}

function hardSelect() {
    numOfBoxes = 9
    medium.classList.remove('selected');
    easy.classList.remove('selected');
    hard.classList.add('selected');
    RegeneratingBoxes(container);

    colors = generateRandomColors(numOfBoxes);
    pickedColor = pickColor();
    correctDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'inline-block';
        squares[i].classList.remove('box-anim');
    }
    displayNavColor.style.backgroundColor = 'black';
    RegeneratingBoxes(displayNavColor);
    newGame.textContent = 'new colors';
    messageDisplay.textContent = '';
    iconContainer.innerHTML = "";
    createIcons(3);
}

var pickedColor = pickColor();
correctDisplay.textContent = pickedColor;
createIcons();
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            displayNavColor.style.backgroundColor = clickedColor;
            messageDisplay.textContent = 'correct';
            RegeneratingBoxes(messageDisplay);
            changeColors(clickedColor);
            RegeneratingBoxes(container);
            newGame.textContent = 'play again?'
            correctAudio();
        } else {
            console.log(this.style.backgroundColor);
            messageDisplay.textContent = 'try again';
            RegeneratingBoxes(messageDisplay);
            messageDisplay.style.color = 'white';
            animation(this);
            if (iconContainer.hasChildNodes()) {

                iconContainer.removeChild(iconContainer.childNodes[0]);
            } else {
                for (var i = 0; i < squares.length; i++) {
                    squares[i].style.backgroundColor = 'red';
                }
                messageDisplay.textContent = 'You Lose'
            }
        }
    });
};


for (var i = 6; i < squares.length; i++) {
    squares[i].style.display = 'none';
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
};

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
};

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

function disappearing(object) {
    object.animate([{
            opacity: 1,
            offset: 0
        },
        {
            opacity: 0.5,
            offset: 0.5
        },
        {
            opacity: 0,
            offset: 1
        }
    ], {
        duration: 500,
        easing: 'ease-out'
    });
}

function animation(box) {
    box.animate([{
            transform: 'translate(0)',
            offset: 0
        },
        {
            transform: 'translate(30px)',
            offset: 0.5
        },
        {
            transform: 'translate(-20px)',
            boxshadow: '0px 6px 20px rgba(0, 0, 0, 0.5)',
            offset: 0.8
        },
        {
            transform: 'translate(20px)',
            boxshadow: '0px 6px 20px rgba(0, 0, 0, 0.5)',
            offset: 0.9
        },
        {
            transform: 'translate(0)',
            offset: 1
        }
    ], {
        duration: 500,
        easing: 'ease-out',
    });
};

function RegeneratingBoxes(x) {
    x.animate([{
            opacity: 0,
            offset: 0
        },
        {
            opacity: 0.5,
            offset: 0.5
        },
        {
            opacity: 1,
            offset: 1
        }
    ], {
        duration: 1200,
        easing: 'ease-out'
    });
};

function correctAudio() {
    var audio = new Audio('correct.mp3');
    audio.play();
};

function removeChildNodes() {
    if (iconContainer.hasChildNodes()) {
        iconContainer.removeChild(iconContainer.childNodes[0]);
    } else {
        alert('you lost');
    }
};

function createIcons(num) {
    for (var i = 0; i < num; i++) {
        var node = document.createElement('li');
        node.classList.add('material-icons');
        node.classList.add('icons');
        node.textContent = 'favorite';
        iconContainer.appendChild(node);
    }
};