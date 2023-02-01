const pacman = document.querySelector('#small-pacman-heading-right');
console.log("pacman: ")
console.log(pacman);

window.addEventListener("keyup", (e) => {
    console.log(e.keyCode)

    const left = getComputedStyle(pacman).left;
    const parsedLeft = parseInt(left); 
    const topEl = getComputedStyle(pacman).top;
    const parsedTop = parseInt(topEl);

    let k = 0;
    function moveOnce() { 
        if(e.keyCode === 37) {
            pacman.style.left = (parsedLeft - k) + 'px';  
        } else if(e.keyCode === 40){
            pacman.style.left = (parsedLeft + k) + 'px'; 
        } else if(e.keyCode === 39) {
            pacman.style.top = (parsedTop - k) + 'px';
        } else if(e.keyCode === 38){
            pacman.style.top = (parsedTop + k) + 'px'; 
        }
        k++;
    }

    switch(e.keyCode) {
        case 37: setInterval(moveOnce, 20); break;
        case 40: setInterval(moveOnce, 20); break;
        case 39: setInterval(moveOnce, 20); break;
        case 38: setInterval(moveOnce, 20); break;
    }
})
