const pacman = document.querySelector('#small-pacman-full-circle');
const redGhost = document.querySelector('#red-monster-looking-up-1');

const cyanGhost = document.querySelector('#cyan-monster-looking-up-1');
const pinkGhost = document.querySelector('#pink-monster-looking-down-1');
const orangeGhost = document.querySelector('#orange-monster-looking-up-1');

pacman.style.left = getComputedStyle(pacman).left;
pacman.style.top = getComputedStyle(pacman).top;

cyanGhost.style.left = getComputedStyle(cyanGhost).left;
cyanGhost.style.top = getComputedStyle(cyanGhost).top;
cyanGhost.direction = 'down';

pinkGhost.style.left = getComputedStyle(pinkGhost).left;
pinkGhost.style.top = getComputedStyle(pinkGhost).top;
pinkGhost.direction = 'up';

orangeGhost.style.left = getComputedStyle(orangeGhost).left;
orangeGhost.style.top = getComputedStyle(orangeGhost).top;
orangeGhost.direction = 'down';

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

// all checked, they are right and full
const verticalLines = [  // 1st line l to r
                        { // vertical up - 1 - done
                            startTop: 12.5, 
                            endTop: 68.5, 
                            left: 12.5, 
                        }, 
                        { // vertical down 1 - 1 - done
                            startTop: 164.5, 
                            endTop: 188.5,
                            left: 12.5,  
                        },
                        { // vertical down 2 - 1 - done
                            startTop: 212.5, 
                            endTop: 236.5, 
                            left: 12.5, 
                        },
                        // 2nd line l to r
                        { // vertical 1.5 - down - done
                            left: 28.5,
                            startTop: 188.5,
                            endTop: 212.5,
                        },
                        // 3rd line l to r
                        { // vertical almost full - 2 - done 
                            startTop: 12.5,
                            endTop: 212.5, 
                            left: 52.5,  
                        }, 
                        // 4th line l to r
                        { // vertical 1 - 3 - done
                            startTop: 44.5,
                            endTop: 68.5,
                            left: 76.5,
                        },
                        { // vertical 2 - 3 - done
                            startTop: 92.5,
                            endTop: 164.5,
                            left: 76.5,
                        },
                        { // vertical 3 - 3 - done
                            startTop: 188.5,
                            endTop: 212.5,
                            left: 76.5,
                        },
                        // 5th line
                        { // vertical 1 - 4 - done
                            startTop: 12.5,
                            endTop: 44.5,
                            left: 100.5,
                        },
                        { // vertical 2 - 4 - done
                            startTop: 68.5,
                            endTop: 92.5,
                            left: 100.5,
                        },
                        { // vertical 3 - 4 - done
                            startTop: 164.5,
                            endTop: 188.5,
                            left: 100.5,
                        },
                        { // vertical 4 - 4 - done
                            startTop: 212.5,
                            endTop: 236.5,
                            left: 100.5,
                        },
                        // 6th line
                        { // vertical 1 - 5 - done
                            startTop: 12.5,
                            endTop: 44.5,
                            left: 124.5,
                        },
                        { // vertical 2 - 5 - done
                            startTop: 68.5,
                            endTop: 92.5,
                            left: 124.5,
                        },
                        { // vertical 3 - 5 - done
                            startTop: 164.5,
                            endTop: 188.5,
                            left: 124.5,
                        },
                        { // vertical 4 - 5 - done
                            startTop: 212.5,
                            endTop: 236.5,
                            left: 124.5,
                        }, 
                        // 7th line
                        { // vertical 1 - 6 - done
                            startTop: 44.5,
                            endTop: 68.5,
                            left: 148.5,
                        }, 
                        { // vertical 2 - 6 - done
                            startTop: 92.5,
                            endTop: 164.5,
                            left: 148.5,
                        },
                        { // vertical 3 - 6 - done
                            startTop: 188.5,
                            endTop: 212.5,
                            left: 148.5,
                        }, 
                        // 8th line
                        { // vertical 7 - almost full - done
                            startTop: 12.5,
                            endTop: 212.5,
                            left: 172.5,
                        },
                        // 9th line
                        { // 7.5 - vertical missed right - done
                            left: 196.5,
                            startTop: 188.5,
                            endTop: 212.5,
                        },
                        // 10th line
                        { // vertical 1 - 8 - done
                            startTop: 12.5, 
                            endTop: 68.5, 
                            left: 212.5,
                        }, 
                        { // vertical 2 - 8 - done
                            startTop: 164.5, 
                            endTop: 188.5,
                            left: 212.5,
                        }, 
                        { // vertical 3 - 8 - done
                            startTop: 212.5, 
                            endTop: 236.5, 
                            left: 212.5,
                        },
                    ]

const horizontalLines = [
// first line 
// left up 1 - horizontal - done
{ 
    top: 12.5, 
    startLeft: 12.5, 
    endLeft: 100.5 
},
{  // right up 1 - horizontal - done
    top: 12.5, 
    startLeft: 124.5,  
    endLeft: 212.5 
},
//second line 
{  // full line up 2 - horizontal - done
    top: 44.5, 
    startLeft: 12.5, 
    endLeft: 212.5 
}, 
// 3rd line
{ // left line up 3 - horizontal - done
    top: 68.5, 
    startLeft: 12.5, 
    endLeft: 52.5
},
{ // middle left line up 3 - horizontal - done
    top: 68.5, 
    startLeft: 76.5, 
    endLeft: 100.5 
},
{ // middle right line up 3 - horizontal - done
    top: 68.5, 
    startLeft: 124.5, 
    endLeft: 148.5 
},
{ // right line up 3 - horizontal - done
    top: 68.5, 
    startLeft: 172.5, 
    endLeft: 212.5
}, 
// 4th line
{ // line above the cage - horizontal - done
    top: 92.5,
    startLeft: 76.5,
    endLeft: 148.5,
},
// 5th line
//this is the middle line that is specific, may be get it out for now
// instead of it, visualise only the part of it that is fully in the labyrinth
{ // middle line left 0 - horizontal - done
    top: 116.5, 
    startLeft: 8.5, 
    endLeft:  76.5
}, 
{ // middle line right 0 - horizontal - done
    top: 116.5, 
    startLeft: 148.5, 
    endLeft:  219.5
},
// 6th line
// line under the cage - done
{
    top: 140.5,
    startLeft: 76.5,
    endLeft: 148.5,
},
// 7th line
{ // left line down 1 - horizontal - done
    top: 164.5, 
    startLeft: 12.5, 
    endLeft: 100.5 
}, 
{ // right line down 1 - horizontal - done
    top: 164.5, 
    startLeft: 124.5, 
    endLeft: 212.5
},
// 8th line
{ // left line down 2 - horizontal - done
    top: 188.5, 
    startLeft: 12.5, 
    endLeft: 28.5  
},
{ // middle line down 2 - horizontal - done
    top: 188.5, 
    startLeft: 52.5, 
    endLeft: 172.5
}, 
{ // right line down 2 - horizontal - done
    top: 188.5, 
    startLeft: 196.5, 
    endLeft: 212.5
},
// 9th line
{ // right line down 3 - horizontal - done
    top: 212.5, 
    startLeft: 12.5, 
    endLeft: 52.5
},
{ // right middle line down 3 - horizontal - done
    top: 212.5, 
    startLeft: 76.5, 
    endLeft: 100.5
}, 
{ // left middle line down 3 - horizontal - done
    top: 212.5, 
    startLeft: 124.5, 
    endLeft: 148.5
}, 
{ // right line down 3 - horizontal - done
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
window.addEventListener("keyup", (e) => {
    if(id) {
        clearInterval(id);
        id = null;
    }

    if(pacmanDirectionId) {
        clearInterval(pacmanDirectionId);
        pacmanDirectionId = null;
    }

    const left = getComputedStyle(pacman).left;
    const parsedLeft = parseInt(left); 
    const topEl = getComputedStyle(pacman).top;
    const parsedTop = parseInt(topEl);

    if(e.keyCode >= 37 && e.keyCode <= 40) {
        const top = parseFloat(pacman.style.top);
        const left = parseFloat(pacman.style.left);

        var currentVerticalLine = null, currentHorizontalLine = null;
        verticalLines.forEach((line) => {
            if(left == line.left && line.startTop <= top && top <= line.endTop) {
                currentVerticalLine = line;
            }
        })

        horizontalLines.forEach((line) => {
            if(top == line.top && line.startLeft <= left && left <= line.endLeft) {
                currentHorizontalLine = line;
            }
        })

        let k = 0;
        function moveOnce() { 
            switch(e.keyCode) {
                case 37: { // left
                            if(currentHorizontalLine && 
                                parseFloat(pacman.style.left) > currentHorizontalLine.startLeft) {
                                    pacman.style.left = (parsedLeft - k) + 'px';
                            }

                            /*if(currentVerticalLine) {
                                horizontalLines.forEach((line) => {
                                    if(line.top - 1 < parseFloat(pacman.style.top) < line.top + 1 && 
                                        line.endLeft < parseFloat(pacman.style.left)) {
                                            pacman.style.top = line.top + 'px';
                                            pacman.style.left = (parsedLeft - k) + 'px';
                                    }
                                })
                            }*/
                        } 
                        break;

                case 39: { // right
                        if(currentHorizontalLine && parseFloat(pacman.style.left) < currentHorizontalLine.endLeft) { 
                                pacman.style.left = (parsedLeft + k) + 'px'; 
                            } 

                            /*if(currentVerticalLine) {
                                horizontalLines.forEach((line) => {
                                    if(line.top - 1 < parseFloat(pacman.style.top) < line.top + 1 && line.startLeft > parseFloat(pacman.style.left)) {
                                        pacman.style.top = line.top + 'px';
                                        pacman.style.left = (parsedLeft + k) + 'px';
                                    }
                                })
                            }*/
                        } 
                        break;

                case 38: { // up
                    if(currentVerticalLine && parseFloat(pacman.style.top) > currentVerticalLine.startTop) { 
                                pacman.style.top = (parsedTop - k) + 'px'; 
                            } 

                        /*if(currentHorizontalLine) {
                            verticalLines.forEach((line) => {
                                if(line.left - 1 < parseFloat(pacman.style.left) < line.left + 1 && line.endTop < parseFloat(pacman.style.top)) {
                                    pacman.style.top = (parsedTop - k) + 'px';
                                    pacman.style.left = line.left + 'px';
                                }
                            })
                        }*/
                    }

                        break; 

                case 40: { // down
                        if(currentVerticalLine && parseFloat(pacman.style.top) < currentVerticalLine.endTop) {
                                pacman.style.top = (parsedTop + k) + 'px'; 
                            }

                            /*if(currentHorizontalLine) {
                                verticalLines.forEach((line) => {
                                    if(line.left - 1 < parseFloat(pacman.style.left) < line.left + 1 && line.startTop < parseFloat(pacman.style.top)) {
                                        pacman.style.top = (parseFloat(pacman.style.top) + k ) + 'px';
                                        pacman.style.left = line.left + 'px';
                                    }
                                })
                            }*/
                        } 
                        break;

            }
            k += 0.5;
        }

        id = setInterval(moveOnce, 10); 
        pacmanDirectionId = setInterval(switchFrames, 200, e.keyCode, pacman, pacmanIds)
    }
})

function toggleBetweenIds(object, id1, id2) {
    if (object.id == id1) {
        object.id = id2;
    } else {
        object.id = id1;
    }
}

const emptyBlueSpaces = document.querySelectorAll('.empty-blue-space');
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