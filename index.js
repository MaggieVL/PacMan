var cyanGhostInACageId, pinkGhostInACageId, orangeGhostInACageId;
var cyanGhostFramesId, pinkGhostFramesId, orangeGhostFramesId;

const pacman = document.querySelector('#small-pacman-full-circle');
const redGhost = document.querySelector('#red-monster-looking-up-1');

const cyanGhost = document.querySelector('#cyan-monster-looking-up-1');
const pinkGhost = document.querySelector('#pink-monster-looking-down-1');
const orangeGhost = document.querySelector('#orange-monster-looking-up-1');
const exampleOrangeGhost = document.querySelector('#orange-monster-for-explosion-example');

const pacmanLivesHolder = document.querySelector('#pacman-lives-holder');
const scoreHolder = document.createElement('div');
scoreHolder.id = 'score-holder';

pacman.style.left = getComputedStyle(pacman).left;
pacman.style.top = getComputedStyle(pacman).top;
pacman.currentLine = {
                        top: 188.5,
                        startLeft: 52.5,
                        endLeft: 172.5 
                    }
pacman.startPosition = {
                         top: 188.5,
                         left: 112.5
                        }

redGhost.style.left = getComputedStyle(redGhost).left;
redGhost.style.top = getComputedStyle(redGhost).top;
redGhost.currentLine = {
                            top: 92.5,
                            startLeft: 76.5,
                            endLeft: 148.5,
                        }

redGhost.startPosition = {
                            top: 92.5,
                            left: 111,
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

const explodingPacmanIdBase = 'small-pacman-exploding-turned-upside-down-mouth-open-';

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

const pacmanLifeFirst = document.querySelector('.pacman-life');
const pacmanLife = document.createElement('div');
pacmanLife.className = 'pacman-life';
pacmanLife.style.left = (parseFloat(getComputedStyle(pacmanLifeFirst).left) + 17) + 'px';
const monsterExample = document.querySelector('#orange-monster-for-explosion-example');
const parentElement = monsterExample.parentNode;
parentElement.insertBefore(pacmanLife, pacmanLivesHolder);

const emptyBlueSpaces = document.querySelectorAll('.empty-blue-space-for-a-power-pellet');
emptyBlueSpaces.forEach((space) => {
    let styles = getComputedStyle(space);
    space.style.top = styles.top;
    space.style.left = styles.left;
    space.style.zIndex = styles.zIndex;
})

const offset = 6;

function arePowerPelletCoordinates(top, left, coordinates) {
    const length = coordinates.length;

    for(let i = 0; i < length; i++) {
        let singleCoordinate = coordinates[i];
        let powerPelletTop = parseFloat(getComputedStyle(singleCoordinate).top);
        let powerPelletLeft = parseFloat(getComputedStyle(singleCoordinate).left);

        if(top - 3.5 === powerPelletTop && left - 3.5 === powerPelletLeft) {
            return [powerPelletTop, powerPelletLeft];
        }
    }
    return undefined;
}

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
];

const coinsCoordinatesHorizontal = horizontalLines.map((line) => {
   return { 
            lefts: splitInterval(line.startLeft + offset, line.endLeft + offset, 8),
            top: line.top + offset,
        }
});

const coinsCoordinatesVertical = verticalLines.map((line) => {
   return { 
            left: line.left + offset, 
            tops: splitInterval(line.startTop + offset, line.endTop + offset, 8)
        }
});

function splitInterval(startNum, endNum, interval) {
    const res = [];
    for(let i = startNum; i <= endNum; i+= interval) {
        res.push(i);
    }
    return res;
}

function switchFrames(keyCode, object, ids) {
    switch(keyCode) {
        case 37: { toggleBetweenIds(object, ids[0], ids[1]);} break; //left
        case 39: { toggleBetweenIds(object, ids[2], ids[3]);} break; //right
        case 38: { toggleBetweenIds(object, ids[4], ids[5]);} break; //up
        case 40: { toggleBetweenIds(object, ids[6], ids[7]);} break; //down
    }
};

let pelletUpLeftId = setInterval(switchPelletVisibility, 1, emptyBlueSpaces[0]);
let pelletUpRightId = setInterval(switchPelletVisibility, 1, emptyBlueSpaces[1]);
let pelletDownLeftId = setInterval(switchPelletVisibility, 1, emptyBlueSpaces[2]);
let pelletDownRightId = setInterval(switchPelletVisibility, 1, emptyBlueSpaces[3]);

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
    if(line.hasOwnProperty('left')) {
        return true;
    }

    return false;
}

function setLineToPossiblyGetOnIfAny(object, currentTop, currentLeft) {
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

function appendNewImageDigits(number) {
    // empty scoreholder
    scoreHolder.innerHTML = '';
    const scoreIdBase = 'score-digit-';
    const digits = number.toString().split('');
    let width = 9.2, i = 0;

    digits.forEach((digit) => { 
        let digitDiv = document.createElement('div');
        digitDiv.setAttribute("id", scoreIdBase + digit);
        digitDiv.style.left = parseFloat(getComputedStyle(scoreHolder).left) + i * width + 'px';
        scoreHolder.appendChild(digitDiv);
        i++;
    });
}

function charactersOverlap(object1, object2) {
    const object1CenterX = object1.style.top + 7.5;
    const object1CenterY = object1.style.left + 7.5;
    const object2Y = parseFloat(object2.style.top);
    const object2X = parseFloat(object2.style.left);

    if(object1CenterX === (object2X + 7.5) && object1CenterY === (object2Y + 15) 
        || object1CenterX === object2X && object1CenterY === (object2Y + 7.5)
        || object1CenterX === (object2X + 7.5) && object1CenterY === object2Y
        || object1CenterX === (object2X + 15) && object1CenterY === (object2Y + 7.5)) {
            return true;
        } 

        return false;
}

let explosionId;
let timesMoved = 0.0, direction = 37, coinScore = 0.0;
function moveOnce(keyCode, object) { 
    const currentTop = parseFloat(object.style.top);
    const currentLeft = parseFloat(object.style.left);
    const emptyCoinSpaceTop = currentTop + 6.0;
    const emptyCoinSpaceLeft = currentLeft + 6.0;

    // pacman explosion
    if(charactersOverlap(pacman, redGhost) || charactersOverlap(pacman, cyanGhost)
        || charactersOverlap(pacman, pinkGhost) || charactersOverlap(pacman, orangeGhost)) {

            clearInterval(redGhostDirectionId);
            clearInterval(redGhostId);
            clearInterval(cyanGhostInACageId);
            clearInterval(pinkGhostInACageId);
            clearInterval(orangeGhostInACageId); 
            clearInterval(cyanGhostFramesId);
            clearInterval(pinkGhostFramesId);
            clearInterval(orangeGhostFramesId);
            clearInterval(pacmanDirectionId);
            clearInterval(id);

            explosionId = setInterval(explode, 100, object);

            setTimeout(() => {
                clearInterval(explosionId);

                const allPacmanLives  = document.querySelectorAll('.pacman-life');
                if(allPacmanLives.length > 0) {
                    allPacmanLives[allPacmanLives.length - 1].remove();
                }

                redGhostId = setInterval(moveOnce, 20, number, redGhost);
                redGhostDirectionId = setInterval(switchFrames, 200, number, redGhost, redGhostIds);

                cyanGhostFramesId = setInterval(switchCageGhostFrames, 200, cyanGhost, cyanGhostIds);
                pinkGhostFramesId = setInterval(switchCageGhostFrames, 200, pinkGhost, pinkGhostIds);
                orangeGhostFramesId = setInterval(switchCageGhostFrames, 200, orangeGhost, orangeGhostIds);

                cyanGhostInACageId = setInterval(moveGhostUpAndDown, 20, cyanGhost);
                pinkGhostInACageId = setInterval(moveGhostUpAndDown, 20, pinkGhost);
                orangeGhostInACageId = setInterval(moveGhostUpAndDown, 20, orangeGhost);

                object.style.top = object.startPosition.top + 'px';
                object.style.left = object.startPosition.left + 'px';
                object.id = 'small-pacman-full-circle';
            }, 2000);
    }

    // coin counting
    const k = 0.5;
    if(keyCode == direction) {
        timesMoved += k;
    } else {
        timesMoved = 0;
        direction = keyCode;
    }

    const allBlankSpaces = Array.from(document.querySelectorAll('.empty-coin-space'));
    const filteredBlankSpaces = allBlankSpaces.filter((blankSpace) => {
        const top = parseFloat(blankSpace.style.top);
        const left = parseFloat(blankSpace.style.left);

        if(top === emptyCoinSpaceTop && left === emptyCoinSpaceLeft) {
            return true;
        }

        return false;
    });

    const coinScore = allBlankSpaces.length * 10;
    appendNewImageDigits(coinScore);
    const labyrinth = document.querySelector('#full-labyrinth');
    const parentElement = labyrinth.parentNode;
    parentElement.insertBefore(scoreHolder, labyrinth);

    if(filteredBlankSpaces.length === 0 && areCoinCoordinates(emptyCoinSpaceTop, emptyCoinSpaceLeft)) {
        let emptyCoinSpace = document.createElement('div');
        emptyCoinSpace.className = 'empty-coin-space';
        emptyCoinSpace.style.top = emptyCoinSpaceTop + 'px';
        emptyCoinSpace.style.left = emptyCoinSpaceLeft + 'px';
        const monsterExample = document.querySelector('#orange-monster-for-explosion-example');
        const parentElement = monsterExample.parentNode;
        parentElement.insertBefore(emptyCoinSpace, monsterExample);
    }

    let currentPelletCoords = arePowerPelletCoordinates(emptyCoinSpaceTop, emptyCoinSpaceLeft, emptyBlueSpaces)
    if(currentPelletCoords) {
        const newZIndex = 5;
        for(let i = 0; i < emptyBlueSpaces.length; i++) {
            if(currentPelletCoords[0] === 31 && currentPelletCoords[1] === 15) {
                clearInterval(pelletUpLeftId);
                emptyBlueSpaces[i].style.zIndex = newZIndex;
            } else if(currentPelletCoords[0] === 31 && currentPelletCoords[1] === 215) {
                clearInterval(pelletUpRightId);
                emptyBlueSpaces[i].style.zIndex = newZIndex;
            } else if(currentPelletCoords[0] === 191 && currentPelletCoords[1] === 15) {
                clearInterval(pelletDownLeftId);
                emptyBlueSpaces[i].style.zIndex = newZIndex;
            } else if(currentPelletCoords[0] === 191 && currentPelletCoords[1] === 215) {
                clearInterval(pelletDownRightId);
                emptyBlueSpaces[i].style.zIndex = newZIndex;
            }
        }
    }

    setLineToPossiblyGetOnIfAny(object, currentTop, currentLeft);
    currentLineIsVertical = isVerticalLine(object.currentLine);

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

function areCoinCoordinates(top, left) {
    if(arePowerPelletCoordinates(top, left, emptyBlueSpaces)) {
        return false;
    }

    for(let i = 0; i < coinsCoordinatesHorizontal.length; i++) {
        const leftCheck = coinsCoordinatesHorizontal[i].lefts.filter((leftCoord) => { 
            if(leftCoord === left) {
                return true;
            } 
            return false;
        })

        if(leftCheck.length > 0 && top === coinsCoordinatesHorizontal[i].top) {
            return true;
        }
    }

    for(let j = 0; j < coinsCoordinatesVertical.length; j++) {
        const topCheck = coinsCoordinatesVertical[j].tops.filter((topCoord) => {
            if(topCoord === top) {
                return true;
            }
            return false;
        });

        if(topCheck.length > 0 && left === coinsCoordinatesVertical[j].left) {
            return true;
        }
    }
}

function toggleBetweenIds(object, id1, id2) {
    if (object.id == id1) {
        object.id = id2;
    } else {
        object.id = id1;
    }
}

function toggleBetweenZIndices(object, zIndex1, zIndex2) {
    if(object.style.zIndex == zIndex1) {
        object.style.zIndex = zIndex2;
    } else {
        object.style.zIndex = zIndex1;
    }
}

function switchPelletVisibility(element) {
    toggleBetweenZIndices(element, -5, 5);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

let redGhostId, redGhostDirectionId;
function moveRedGhost() {
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

    redGhostId = setInterval(moveOnce, 20, number, redGhost);
    redGhostDirectionId = setInterval(switchFrames, 200, number, redGhost, redGhostIds);
}

setInterval(moveRedGhost, 1000)

function moveGhostUpAndDown(ghost) {
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

function switchCageGhostFrames(ghost, ghostIds) {
    if(ghost.direction === 'up') {
        switchFrames(38, ghost, ghostIds);
    } else if(ghost.direction === 'down') {
        switchFrames(40, ghost, ghostIds);
    }
}

cyanGhostFramesId = setInterval(switchCageGhostFrames, 200, cyanGhost, cyanGhostIds);
pinkGhostFramesId = setInterval(switchCageGhostFrames, 200, pinkGhost, pinkGhostIds);
orangeGhostFramesId = setInterval(switchCageGhostFrames, 200, orangeGhost, orangeGhostIds);

cyanGhostInACageId = setInterval(moveGhostUpAndDown, 20, cyanGhost);
pinkGhostInACageId = setInterval(moveGhostUpAndDown, 20, pinkGhost);
orangeGhostInACageId = setInterval(moveGhostUpAndDown, 20, orangeGhost);

// exploding pacman - used when pacman runs into a ghost
let i = 1;
function explode(object) {
    if(i <= 11) {
        object.id = explodingPacmanIdBase + i;
        i++;
    }
}
