const container = document.querySelector('#container');
const player = document.querySelector('#player');
const play = document.querySelector('body');

const arrowRight = document.querySelector('#arrowRight');
const arrowLeft = document.querySelector('#arrowLeft');
const arrowUp = document.querySelector('#arrowUp');
const arrowDown = document.querySelector('#arrowDown');

let LeftRight = 0
let UpDown = 0
let change = 0
play.addEventListener('keydown', selectMove);

arrowRight.addEventListener('click', moveRight);
arrowLeft.addEventListener('click', moveLeft);
arrowDown.addEventListener('click', moveDown);
arrowUp.addEventListener('click', moveUp);
function moveLeft() {
    if (LeftRight > 0) {
        if (change == 0) {
            player.style.backgroundImage = `url(assets/images/mario2.jpg)`
            change ++
        } else if (change == 1) {
            player.style.backgroundImage = `url(assets/images/mario.jpg)`
            change --
        }
        LeftRight -= 20
        player.style.marginLeft = `${LeftRight}px`
        console.log(LeftRight)
    }
}
function moveRight() {
    if (change == 0) {
        player.style.backgroundImage = `url(assets/images/mario2.jpg)`
        change ++
    } else if (change == 1) {
        player.style.backgroundImage = `url(assets/images/mario.jpg)`
        change --
    }
    if (LeftRight < 520) {
        LeftRight += 20
        player.style.marginLeft = `${LeftRight}px`
        console.log(LeftRight)
    }
}
function moveDown() {
    if (change == 0) {
        player.style.backgroundImage = `url(assets/images/mario2.jpg)`
        change ++
    } else if (change == 1) {
        player.style.backgroundImage = `url(assets/images/mario.jpg)`
        change --
    }
    if (UpDown < 100) {
        UpDown += 20
        player.style.marginTop = `${UpDown}px`
        console.log(UpDown)
    }
}
function moveUp() {
    if (change == 0) {
        player.style.backgroundImage = `url(assets/images/mario2.jpg)`
        change ++
    } else if (change == 1) {
        player.style.backgroundImage = `url(assets/images/mario.jpg)`
        change --
    }
    if (UpDown > 0) {
        UpDown -= 20
        player.style.marginTop = `${UpDown}px`
        console.log(UpDown)
    }
}
function selectMove(event) {
    if (event.keyCode == 37) {
        moveLeft() 
    }
    if (event.keyCode == 38) {
        moveUp() 
    }
    if (event.keyCode == 39) {
        moveRight() 
    }
    if (event.keyCode == 40) {
        moveDown() 
    }
}
