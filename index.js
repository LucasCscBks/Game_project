const container = document.querySelector('#container');
const player = document.querySelector('#player');
const play = document.querySelector('body');

let LeftRight = 0
let UpDown = 0
let change = 0
play.addEventListener('keydown', selectMove);

function moveLeft() {
    if (LeftRight > 0) {
        LeftRight -= 20
        player.style.marginLeft = `${LeftRight}px`
        console.log(LeftRight)
    }
}
function moveRight() {
    if (LeftRight < 520) {
        LeftRight += 20
        player.style.marginLeft = `${LeftRight}px`
        console.log(LeftRight)
    }
}
function moveBottom() {
    if (UpDown < 100) {
        UpDown += 20
        player.style.marginTop = `${UpDown}px`
        console.log(UpDown)
    }
}
function moveUp() {
    if (UpDown > 0) {
        UpDown -= 20
        player.style.marginTop = `${UpDown}px`
        console.log(UpDown)
    }
}
function selectMove(event) {
    if (change == 0) {
        player.style.backgroundImage = `url(assets/images/mario2.jpg)`
        change ++
    } else if (change == 1) {
        player.style.backgroundImage = `url(assets/images/mario.jpg)`
        change --
    }
    
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
        moveBottom() 
    }
}
