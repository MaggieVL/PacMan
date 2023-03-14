const pacman = document.querySelector('#small-pacman-full-circle');
const redGhost = document.querySelector('#red-monster-looking-up-1');

const cyanGhost = document.querySelector('#cyan-monster-looking-up-1');
const pinkGhost = document.querySelector('#pink-monster-looking-down-1');
const orangeGhost = document.querySelector('#orange-monster-looking-up-1');
const exampleOrangeGhost = document.querySelector('#orange-monster-for-explosion-example');

pacman.style.left = getComputedStyle(pacman).left;
pacman.style.top = getComputedStyle(pacman).top;
pacman.currentLine = {
                        top: 188.5,
                        startLeft: 52.5,
                        endLeft: 172.5 
                    }

cyanGhost.style.left = getComputedStyle(cyanGhost).left;
cyanGhost.style.top = getComputedStyle(cyanGhost).top;
cyanGhost.direction = 'down';

pinkGhost.style.left = getComputedStyle(pinkGhost).left;
pinkGhost.style.top = getComputedStyle(pinkGhost).top;
pinkGhost.direction = 'up';

orangeGhost.style.left = getComputedStyle(orangeGhost).left;
orangeGhost.style.top = getComputedStyle(orangeGhost).top;
orangeGhost.direction = 'down';

exampleOrangeGhost.style.left = getComputedStyle(exampleOrangeGhost).left;
exampleOrangeGhost.style.top = getComputedStyle(exampleOrangeGhost).top;

const pacmanIds = [
                    'small-pacman-turned-left-mouth-wide-open', 'small-pacman-turned-left-mouth-slightly-open',
                    'small-pacman-turned-right-mouth-wide-open', 'small-pacman-turned-right-mouth-slightly-open',
                    'small-pacman-turned-upside-down-mouth-wide-open', 'small-pacman-turned-upside-down-mouth-slightly-open',
                    'small-pacman-turned-upright-mouth-wide-open', 'small-pacman-turned-upright-mouth-slightly-open'
                  ]

const redGhostIds = [
                        'red-monster-looking-to-the-right-1', 'red-monster-looking-to-the-right-2',
                        'red-monster-looking-to-the-left-1', 'red-monster-looking-to-the-left-2',
                        'red-monster-looking-up-1', 'red-monster-looking-up-2',
                        'red-monster-looking-down-1', 'red-monster-looking-down-2'
                    ]

const cyanGhostIds = [
                        'cyan-monster-looking-to-the-right-1', 'cyan-monster-looking-to-the-right-2',
                        'cyan-monster-looking-to-the-left-1', 'cyan-monster-looking-to-the-left-2',
                        'cyan-monster-looking-up-1', 'cyan-monster-looking-up-2',
                        'cyan-monster-looking-down-1', 'cyan-monster-looking-down-2'
                    ]

const pinkGhostIds = [
                        'pink-monster-looking-to-the-right-1', 'pink-monster-looking-to-the-right-2',
                        'pink-monster-looking-to-the-left-1', 'pink-monster-looking-to-the-left-2',
                        'pink-monster-looking-up-1', 'pink-monster-looking-up-2',
                        'pink-monster-looking-down-1', 'pink-monster-looking-down-2'
                    ]

const orangeGhostIds = [
                        'orange-monster-looking-to-the-right-1', 'orange-monster-looking-to-the-right-2',
                        'orange-monster-looking-to-the-left-1', 'orange-monster-looking-to-the-left-2',
                        'orange-monster-looking-up-1', 'orange-monster-looking-up-2',
                        'orange-monster-looking-down-1', 'orange-monster-looking-down-2'
                    ] 
                    
const explodingPacmanIdBase = 'small-pacman-exploding-turned-upside-down-mouth-open-';

const verticalLines = [  // 1st line l to r
                        { // vertical up - 1
                            startTop: 12.5, 
                            endTop: 68.5, 
                            left: 12.5, 
                        }, 
                        { // vertical down 1 - 1
                            startTop: 164.5, 
                            endTop: 188.5,
                            left: 12.5,  
                        },
                        { // vertical down 2 - 1
                            startTop: 212.5, 
                            endTop: 236.5, 
                            left: 12.5, 
                        },
                        // 2nd line l to r
                        { // vertical 1.5 - down
                            left: 28.5,
                            startTop: 188.5,
                            endTop: 212.5,
                        },
                        // 3rd line l to r
                        { // vertical almost full - 2 
                            startTop: 12.5,
                            endTop: 212.5, 
                            left: 52.5,  
                        }, 
                        // 4th line l to r
                        { // vertical 1 - 3
                            startTop: 44.5,
                            endTop: 68.5,
                            left: 76.5,
                        },
                        { // vertical 2 - 3
                            startTop: 92.5,
                            endTop: 164.5,
                            left: 76.5,
                        },
                        { // vertical 3 - 3
                            startTop: 188.5,
                            endTop: 212.5,
                            left: 76.5,
                        },
                        // 5th line
                        { // vertical 1 - 4
                            startTop: 12.5,
                            endTop: 44.5,
                            left: 100.5,
                        },
                        { // vertical 2 - 4
                            startTop: 68.5,
                            endTop: 92.5,
                            left: 100.5,
                        },
                        { // vertical 3 - 4
                            startTop: 164.5,
                            endTop: 188.5,
                            left: 100.5,
                        },
                        { // vertical 4 - 4
                            startTop: 212.5,
                            endTop: 236.5,
                            left: 100.5,
                        },
                        // 6th line
                        { // vertical 1 - 5
                            startTop: 12.5,
                            endTop: 44.5,
                            left: 124.5,
                        },
                        { // vertical 2 - 5
                            startTop: 68.5,
                            endTop: 92.5,
                            left: 124.5,
                        },
                        { // vertical 3 - 5
                            startTop: 164.5,
                            endTop: 188.5,
                            left: 124.5,
                        },
                        { // vertical 4 - 5
                            startTop: 212.5,
                            endTop: 236.5,
                            left: 124.5,
                        }, 
                        // 7th line
                        { // vertical 1 - 6
                            startTop: 44.5,
                            endTop: 68.5,
                            left: 148.5,
                        }, 
                        { // vertical 2 - 6
                            startTop: 92.5,
                            endTop: 164.5,
                            left: 148.5,
                        },
                        { // vertical 3 - 6
                            startTop: 188.5,
                            endTop: 212.5,
                            left: 148.5,
                        }, 
                        // 8th line
                        { // vertical 7 - almost full
                            startTop: 12.5,
                            endTop: 212.5,
                            left: 172.5,
                        },
                        // 9th line
                        { // 7.5 - vertical missed right
                            left: 196.5,
                            startTop: 188.5,
                            endTop: 212.5,
                        },
                        // 10th line
                        { // vertical 1 - 8
                            startTop: 12.5, 
                            endTop: 68.5, 
                            left: 212.5,
                        }, 
                        { // vertical 2 - 8
                            startTop: 164.5, 
                            endTop: 188.5,
                            left: 212.5,
                        }, 
                        { // vertical 3 - 8
                            startTop: 212.5, 
                            endTop: 236.5, 
                            left: 212.5,
                        },
                    ]

const horizontalLines = [
// first line 
// left up 1 - horizontal
{ 
    top: 12.5, 
    startLeft: 12.5, 
    endLeft: 100.5 
},
{  // right up 1 - horizontal
    top: 12.5, 
    startLeft: 124.5,  
    endLeft: 212.5 
},
//second line 
{  // full line up 2 - horizontal
    top: 44.5, 
    startLeft: 12.5, 
    endLeft: 212.5 
}, 
// 3rd line
{ // left line up 3 - horizontal
    top: 68.5, 
    startLeft: 12.5, 
    endLeft: 52.5
},
{ // middle left line up 3 - horizontal
    top: 68.5, 
    startLeft: 76.5, 
    endLeft: 100.5 
},
{ // middle right line up 3 - horizontal
    top: 68.5, 
    startLeft: 124.5, 
    endLeft: 148.5 
},
{ // right line up 3 - horizontal
    top: 68.5, 
    startLeft: 172.5, 
    endLeft: 212.5
}, 
// 4th line
{ // line above the cage - horizontal
    top: 92.5,
    startLeft: 76.5,
    endLeft: 148.5,
},
// 5th line
//this is the middle line that is specific, may be get it out for now
// instead of it, visualise only the part of it that is fully in the labyrinth
{ // middle line left 0 - horizontal
    top: 116.5, 
    startLeft: 8.5, 
    endLeft:  76.5
}, 
{ // middle line right 0 - horizontal
    top: 116.5, 
    startLeft: 148.5, 
    endLeft:  219.5
},
// 6th line
// line under the cage
{
    top: 140.5,
    startLeft: 76.5,
    endLeft: 148.5,
},
// 7th line
{ // left line down 1 - horizontal
    top: 164.5, 
    startLeft: 12.5, 
    endLeft: 100.5 
}, 
{ // right line down 1 - horizontal
    top: 164.5, 
    startLeft: 124.5, 
    endLeft: 212.5
},
// 8th line
{ // left line down 2 - horizontal
    top: 188.5, 
    startLeft: 12.5, 
    endLeft: 28.5  
},
{ // middle line down 2 - horizontal
    top: 188.5, 
    startLeft: 52.5, 
    endLeft: 172.5
}, 
{ // right line down 2 - horizontal
    top: 188.5, 
    startLeft: 196.5, 
    endLeft: 212.5
},
// 9th line
{ // right line down 3 - horizontal
    top: 212.5, 
    startLeft: 12.5, 
    endLeft: 52.5
},
{ // right middle line down 3 - horizontal
    top: 212.5, 
    startLeft: 76.5, 
    endLeft: 100.5
}, 
{ // left middle line down 3 - horizontal
    top: 212.5, 
    startLeft: 124.5, 
    endLeft: 148.5
}, 
{ // right line down 3 - horizontal
    top: 212.5, 
    startLeft: 172.5, 
    endLeft: 212.5
},
// 10th line
{ // full line down 4 - horizontal  
    top: 236.5, 
    startLeft: 12.5, 
    endLeft: 212.5
},                  
]

function switchFrames(keyCode, object, ids) {
    switch(keyCode) {
        case 37: { toggleBetweenIds(object, ids[0], ids[1]);} break; //left
        case 39: { toggleBetweenIds(object, ids[2], ids[3]);} break; //right
        case 38: { toggleBetweenIds(object, ids[4], ids[5]);} break; //up
        case 40: { toggleBetweenIds(object, ids[6], ids[7]);} break; //down
    }
};

let id, pacmanDirectionId;
window.addEventListener("keydown", (e) => {
    if(id) {
        clearInterval(id);
        id = null;
    }

    if(pacmanDirectionId) {
        clearInterval(pacmanDirectionId);
        pacmanDirectionId = null;
    }

    if(e.keyCode >= 37 && e.keyCode <= 40) {
        id = setInterval(moveOnce, 10, e.keyCode, pacman);
        pacmanDirectionId = setInterval(switchFrames, 200, e.keyCode, pacman, pacmanIds)
    }
})

function isVerticalLine(line) {
    console.log(line);
    if(line.hasOwnProperty('left')) {
        return true;
    }

    return false;
}

function setLineToPossiblyGetOnIfAny(object, currentTop, currentLeft) {
    console.log(object.currentLine)
    const objectIsOnAVerticalLine = isVerticalLine(object.currentLine);

    if(objectIsOnAVerticalLine) {
        horizontalLines.forEach((horizontalLine) => {
            if(horizontalLine.top - 4.6 <= currentTop && currentTop <= horizontalLine.top + 4.6
                && horizontalLine.startLeft <= currentLeft && currentLeft <= horizontalLine.endLeft) {
                object.lineToPossiblyGetOn = horizontalLine;
            } 
        });
    } else {
        verticalLines.forEach((verticalLine) => {
            if(verticalLine.left - 4.6 <= currentLeft && currentLeft <= verticalLine.left + 4.6
                && verticalLine.startTop <= currentTop && currentTop <= verticalLine.endTop) {
                object.lineToPossiblyGetOn = verticalLine;
            } 
        })
    }
}

/*let emptyCoinSpace;
emptyCoinSpace = document.createElement('div');
emptyCoinSpace.setAttribute('left', `400px`);
emptyCoinSpace.setAttribute('top', `100px`);
emptyCoinSpace.setAttribute('position', 'absolute');
emptyCoinSpace.setAttribute('z-index', 200);
emptyCoinSpace.setAttribute('width', '3px');
emptyCoinSpace.setAttribute('height', '3px');

const lastElement = document.getElementById('orange-monster-looking-up-1');
const bodyElement = document.getElementsByTagName('body')[0];
bodyElement.appendChild(emptyCoinSpace);
emptyCoinSpace.after(lastElement);*/

let explosionId;
const scoreHolder = document.querySelector('#score-holder');
let timesMoved = 0.0, direction = 37, coinSum = 0.0;
function moveOnce(keyCode, object) { 
    const currentTop = parseFloat(object.style.top);
    const currentLeft = parseFloat(object.style.left);

    const objectCenterX = currentLeft + 7.5;
    const objectCenterY = currentTop + 7.5;
    const ghostY = parseFloat(exampleOrangeGhost.style.top);
    const ghostX = parseFloat(exampleOrangeGhost.style.left);

    if(objectCenterX === (ghostX + 7.5) && objectCenterY === (ghostY + 15) 
        || objectCenterX === ghostX && objectCenterY === (ghostY + 7.5)
        || objectCenterX === (ghostX + 7.5) && objectCenterY === ghostY
        || objectCenterX === (ghostX + 15) && objectCenterY === (ghostY + 7.5)) {

            clearInterval(explosionId);
            clearInterval(pacmanDirectionId);
            explosionId = setInterval(explode, 100, object);
    }

    const k = 0.5;
    if(keyCode == direction) {
        timesMoved += k;
    } else {
        timesMoved = 0;
        direction = keyCode;
    }

    if(timesMoved == 7.5) {
        coinSum++;
        scoreHolder.innerHTML = '';
        const content = document.createTextNode(coinSum + '')
        scoreHolder.appendChild(content);
        timesMoved = 0;
    }

    setLineToPossiblyGetOnIfAny(object, currentTop, currentLeft);
    currentLineIsVertical = isVerticalLine(object.currentLine);

    let emptyCoinSpace = document.createElement('div');
    emptyCoinSpace.className = 'empty-coin-space';
    emptyCoinSpace.style.top = `${(currentTop + 6.0)}px`;
    emptyCoinSpace.style.left = `${(currentLeft + 6.0)}px`;
    const monsterExample = document.querySelector('#orange-monster-for-explosion-example');
    const parentElement = monsterExample.parentNode;
    parentElement.insertBefore(emptyCoinSpace, monsterExample);

    switch(keyCode) {
        case 37: { // left
                    if(currentTop === 116.5 && currentLeft === 8.5) {
                        object.style.left = 214.5 + 'px';
                        currentLine = {
                                        top: 116.5, 
                                        startLeft: 148.5, 
                                        endLeft:  219.5
                                    };
                        object.lineToPossiblyGetOn = null;
                    }

                    // on a horizontal line
                    if(!currentLineIsVertical
                        && currentLeft > object.currentLine.startLeft) {
                            object.style.left = (currentLeft - k) + 'px';
                    }

                    // on a vertical line
                    if(currentLineIsVertical
                        && object.lineToPossiblyGetOn
                        && currentLeft > object.lineToPossiblyGetOn.startLeft) { 
                            object.currentLine = object.lineToPossiblyGetOn;
                            object.style.left = (currentLeft - k) + 'px';
                            object.style.top = object.lineToPossiblyGetOn.top + 'px';
                            object.lineToPossiblyGetOn = null;
                    }
                } 
                break;

        case 39: { // right
                    if(currentTop === 116.5 && currentLeft === 214.5) {
                        object.style.left = 23.5 + 'px';
                        object.currentLine = { 
                                                top: 116.5, 
                                                startLeft: 8.5, 
                                                endLeft:  76.5
                                            };
                        object.lineToPossiblyGetOn = null;
                    }

                    // on a horizontal line
                    if(!currentLineIsVertical 
                        && currentLeft < object.currentLine.endLeft) { 
                            object.style.left = (currentLeft + k) + 'px'; 
                    }

                    // on a vertical line
                    if(currentLineIsVertical
                        && object.lineToPossiblyGetOn
                        && currentLeft < object.lineToPossiblyGetOn.endLeft) { 
                            object.currentLine = object.lineToPossiblyGetOn;
                            object.style.left = (currentLeft + k) + 'px';
                            object.style.top = object.lineToPossiblyGetOn.top + 'px';
                            object.lineToPossiblyGetOn = null;
                    }
                } 
                break;

        case 38: { // up
                    // on a vertical line
                    if(currentLineIsVertical
                        && currentTop > object.currentLine.startTop) { 
                            object.style.top = (currentTop - k) + 'px'; 
                    }

                    // on a horizontal line
                    if(!currentLineIsVertical
                        && object.lineToPossiblyGetOn
                        && currentTop > object.lineToPossiblyGetOn.startTop) { 
                            object.currentLine = object.lineToPossiblyGetOn;
                            object.style.left = object.lineToPossiblyGetOn.left + 'px';
                            object.style.top = (currentTop - k) + 'px';
                            object.lineToPossiblyGetOn = null;
                    }
            }

                break; 

        case 40: { // down
                    // on a vertical line
                    if(currentLineIsVertical
                        && currentTop < object.currentLine.endTop) {
                        object.style.top = (currentTop + k) + 'px';
                    }

                    // on a horizontal line
                    if(!currentLineIsVertical
                        && object.lineToPossiblyGetOn
                        && currentTop < object.lineToPossiblyGetOn.endTop) { 
                            object.currentLine = object.lineToPossiblyGetOn;
                            object.style.left = object.lineToPossiblyGetOn.left + 'px';
                            object.style.top = (currentTop + k) + 'px';
                            object.lineToPossiblyGetOn = null;
                    }
                } 
                break;

    }
}

function toggleBetweenIds(object, id1, id2) {
    if (object.id == id1) {
        object.id = id2;
    } else {
        object.id = id1;
    }
}

const emptyBlueSpaces = document.querySelectorAll('.empty-blue-space-for-a-power-pellet');
function toggleBetweenZIndices(object, zIndex1, zIndex2) {
    if(object.style.zIndex == zIndex1) {
        object.style.zIndex = zIndex2;
    } else {
        object.style.zIndex = zIndex1;
    }
}

function switchPelletVisibility() {
    emptyBlueSpaces.forEach((element) =>  toggleBetweenZIndices(element, -5, 5))
}

setInterval(switchPelletVisibility)

function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

let redGhostId, redGhostDirectionId;
function f() {
    if(redGhostId) {
        clearInterval(redGhostId);
        redGhostId = null;
    }

    if(redGhostDirectionId) {
        clearInterval(redGhostDirectionId);
        redGhostDirectionId = null;
    }
    
    const leftR = getComputedStyle(redGhost).left;
    const parsedLeftR = parseInt(leftR); 
    const topElR = getComputedStyle(redGhost).top;
    const parsedTopR = parseInt(topElR);

    let number = getRandomInt(37, 40);
    let k = 0;
    function move() { 
        switch(number) {
            case 39: { redGhost.style.left = (parsedLeftR - k) + 'px';} break; //left
            case 37: { redGhost.style.left = (parsedLeftR + k) + 'px'; } break; //right
            case 38: { redGhost.style.top = (parsedTopR - k) + 'px'; } break; //up
            case 40: { redGhost.style.top = (parsedTopR + k) + 'px'; } break; //down
        }
        k++;
    }

    redGhostId = setInterval(move, 20);
    redGhostDirectionId = setInterval(switchFrames, 200, number, redGhost, redGhostIds)
}

setInterval(f, 1000)

function g(ghost) {
    if(parseFloat(ghost.style.top) === 112.5) {
        ghost.direction = 'down';

    } else if(parseFloat(ghost.style.top) === 120.5) {
        ghost.direction = 'up';
    }

    if(ghost.direction === 'up') {
        ghost.style.top = (parseFloat(ghost.style.top) - 0.5) + 'px';

    } else if(ghost.direction === 'down') {
        ghost.style.top = (parseFloat(ghost.style.top) + 0.5) + 'px';
    } 
}

function switchGhostFrames(ghost, ghostIds) {
    if(ghost.direction === 'up') {
        switchFrames(38, ghost, ghostIds);
    } else if(ghost.direction === 'down') {
        switchFrames(40, ghost, ghostIds);
    }
}

setInterval(switchGhostFrames, 200, cyanGhost, cyanGhostIds);
setInterval(switchGhostFrames, 200, pinkGhost, pinkGhostIds);
setInterval(switchGhostFrames, 200, orangeGhost, orangeGhostIds);

setInterval(g, 20, cyanGhost);
setInterval(g, 20, pinkGhost);
setInterval(g, 20, orangeGhost);

//exploding pacman - to be used when pacman runs into a ghost
let i = 1;
function explode(object) {
    if(i <= 12) {
        object.id = explodingPacmanIdBase + i;
        i++;
    }
}

/*function overlap(object1, object2) {
    const rect1 = object1.getBoundingClientRect();
    const rect2 = object2.getBoundingClientRect();
  
    let overlap = rect1.top > rect2.bottom || rect1.right < rect2.left || 
        rect1.bottom < rect2.top || rect1.left > rect2.right

    return !overlap;
}*/
