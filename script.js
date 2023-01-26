const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const spriteImage = new Image();
spriteImage.src = './static/pac-man-sprite.png'

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

const labyrinthWidth = 228;
const labyrinthHeight = 248;

const pacmanWidth = 16;
const pacmanHeight = 15;
let pacmanFramesNumber = 2;
let pacmanFrameCoefficientX = 0;

const ghostWidth = 16;
const ghostHeight = 16;
let ghostFramesNumber = 8;
let ghostFrameCoefficientX = 0;

let gameFrame = 0;
const staggerFrames = 5;
let x = 0;
let y = 0;

function animate() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    context.drawImage(spriteImage, 0, 0, labyrinthWidth, labyrinthHeight, 0, 0, labyrinthWidth + 20, labyrinthHeight - 100);

    context.drawImage(spriteImage, labyrinthWidth * 2 + pacmanFrameCoefficientX * pacmanWidth, 0, pacmanWidth, pacmanHeight, 70 + x, 50, pacmanWidth, pacmanHeight);
    context.drawImage(spriteImage, labyrinthWidth * 2 + pacmanFrameCoefficientX * pacmanWidth, 16, pacmanWidth, pacmanHeight, 90 - x, 50, pacmanWidth, pacmanHeight);
    context.drawImage(spriteImage, labyrinthWidth * 2 + pacmanFrameCoefficientX * pacmanWidth, 32, pacmanWidth, pacmanHeight, 110, 50 - y, pacmanWidth, pacmanHeight);
    context.drawImage(spriteImage, labyrinthWidth * 2 + pacmanFrameCoefficientX * pacmanWidth, 47, pacmanWidth, pacmanHeight, 160, 50 + y, pacmanWidth, pacmanHeight);
    x++; y++;
    context.drawImage(spriteImage, labyrinthWidth * 2 + ghostFrameCoefficientX * ghostWidth, 64, ghostWidth, ghostHeight, 100, 20, ghostWidth, ghostHeight - 1);
    context.drawImage(spriteImage, labyrinthWidth * 2 + ghostFrameCoefficientX * ghostWidth, 80, ghostWidth, ghostHeight, 120, 20, ghostWidth, ghostHeight - 1);
    context.drawImage(spriteImage, labyrinthWidth * 2 + ghostFrameCoefficientX * ghostWidth, 96, ghostWidth, ghostHeight, 140, 20, ghostWidth, ghostHeight - 1);
    context.drawImage(spriteImage, labyrinthWidth * 2 + ghostFrameCoefficientX * ghostWidth, 112, ghostWidth, ghostHeight, 160, 20, ghostWidth, ghostHeight - 1);

    if(gameFrame % staggerFrames == 0) {
        pacmanFrameCoefficientX = pacmanFrameCoefficientX === pacmanFramesNumber - 1 ? 0 : pacmanFrameCoefficientX + 1;
        ghostFrameCoefficientX = ghostFrameCoefficientX === ghostFramesNumber - 1 ? 0 : ghostFrameCoefficientX + 1;
    }
    
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();