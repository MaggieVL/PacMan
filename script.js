const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const spriteImage = new Image();
spriteImage.src = './static/pac-man-sprite.png'

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const labyrinthsWidth = 456;
const pacmanWidth = 16;
const pacmanHeight = 15;
let pacmanFramesNumber = 2;
let pacmanFrameCoefficientX = 0;
let gameFrame = 0;
const staggerFrames = 5;

function animate() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    context.drawImage(spriteImage, labyrinthsWidth + pacmanFrameCoefficientX * pacmanWidth, 0, pacmanWidth, pacmanHeight, 20, 20, pacmanWidth, pacmanHeight);
    context.drawImage(spriteImage, labyrinthsWidth + pacmanFrameCoefficientX * pacmanWidth, 16, pacmanWidth, pacmanHeight, 40, 20, pacmanWidth, pacmanHeight);
    context.drawImage(spriteImage, labyrinthsWidth + pacmanFrameCoefficientX * pacmanWidth, 32, pacmanWidth, pacmanHeight, 60, 20, pacmanWidth, pacmanHeight);
    context.drawImage(spriteImage, labyrinthsWidth + pacmanFrameCoefficientX * pacmanWidth, 47, pacmanWidth, pacmanHeight, 80, 20, pacmanWidth, pacmanHeight);
    
    if(gameFrame % staggerFrames == 0) {
        pacmanFrameCoefficientX = pacmanFrameCoefficientX === pacmanFramesNumber - 1 ? 0 : pacmanFrameCoefficientX + 1;
    }
    
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();