const pacman = document.querySelector('#small-pacman-heading-right');
console.log("pacman: ")
console.log(pacman);

window.addEventListener("keyup", (e) => {
    console.log(e.key)

    const left = getComputedStyle(pacman).left;
    const parsedLeft = parseInt(left); 
    const topEl = getComputedStyle(pacman).top;
    const parsedTop = parseInt(topEl);

    let k = 0;
    function moveOnce() { 
        if(e.key === 'a') {
            pacman.style.left = (parsedLeft - k) + 'px';  
        } else if(e.key === 'd'){
            pacman.style.left = (parsedLeft + k) + 'px'; 
        } else if(e.key === 'w') {
            pacman.style.top = (parsedTop - k) + 'px';
        } else if(e.key === 's'){
            pacman.style.top = (parsedTop + k) + 'px'; 
        }
        k++;
    }

    switch(e.key) {
        case 'a': setInterval(moveOnce, 20); break;
        case 's': setInterval(moveOnce, 20); break;
        case 'd': setInterval(moveOnce, 20); break;
        case 'w': setInterval(moveOnce, 20); break;
    }
})
