const pacman = document.querySelector('#small-pacman-full-circle');

let id, pacmanDirectionId;;
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

    function switchFrames() {
        switch(e.keyCode) {
            case 37: { toggleBetweenIds(pacman, 'small-pacman-turned-left-mouth-wide-open', 'small-pacman-turned-left-mouth-slightly-open');} break; //left
            case 39: { toggleBetweenIds(pacman, 'small-pacman-turned-right-mouth-wide-open', 'small-pacman-turned-right-mouth-slightly-open');} break; //right
            case 38: { toggleBetweenIds(pacman, 'small-pacman-turned-upside-down-mouth-wide-open', 'small-pacman-turned-upside-down-mouth-slightly-open');} break; //up
            case 40: { toggleBetweenIds(pacman, 'small-pacman-turned-upright-mouth-wide-open', 'small-pacman-turned-upright-mouth-slightly-open');} break; //down
        }
    };

    if(e.keyCode >= 37 && e.keyCode <= 40) {
        id = setInterval(moveOnce, 20);
        pacmanDirectionId = setInterval(switchFrames, 200)
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