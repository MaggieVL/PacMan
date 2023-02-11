const pacman = document.querySelector('#small-pacman-heading-right');
console.log("pacman: ")
console.log(pacman);

let id;
window.addEventListener("keyup", (e) => {
    console.log(e.keyCode)

    if(id) {
        clearInterval(id);
        id = null;
    }

    const left = getComputedStyle(pacman).left;
    const parsedLeft = parseInt(left); 
    const topEl = getComputedStyle(pacman).top;
    const parsedTop = parseInt(topEl);

    let k = 0;
    function moveOnce() { 
        switch(e.keyCode) {
            case 37: pacman.style.left = (parsedLeft - k) + 'px'; break; //left
            case 39: pacman.style.left = (parsedLeft + k) + 'px'; break; //right
            case 38: pacman.style.top = (parsedTop - k) + 'px'; break; //up
            case 40: pacman.style.top = (parsedTop + k) + 'px'; break; //down
        }
        k++;
    }

    if(e.keyCode >= 37 && e.keyCode <= 40) {
        id = setInterval(moveOnce, 20);
    }
})
