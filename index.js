const pacman = document.querySelector('#small-pacman-full-circle');
const redGhost = document.querySelector('#red-monster-looking-up-1')

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
    var rect = pacman.getBoundingClientRect();

    let k = 0;
    function moveOnce() { 
        switch(e.keyCode) {
            case 37: { pacman.style.left = (parsedLeft - k) + 'px';} break; //left
            case 39: { pacman.style.left = (parsedLeft + k) + 'px'; } break; //right
            case 38: { pacman.style.top = (parsedTop - k) + 'px'; } break; //up
            case 40: { pacman.style.top = (parsedTop + k) + 'px'; } break; //down
        }
        k++;
    }

    if(e.keyCode >= 37 && e.keyCode <= 40) {
        id = setInterval(moveOnce, 20);
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
    console.log(number)
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