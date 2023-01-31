const pacman = document.querySelector('#small-pacman-heading-right');
console.log("pacman: ")
console.log(pacman);

window.addEventListener("keydown", (e) => {
    console.log(e.key)

    const left = getComputedStyle(pacman).left;
    const topEl = getComputedStyle(pacman).top;
    const parsedLeft = parseInt(left); 
    const parsedTop = parseInt(topEl);

    switch(e.key) {
        case 'a': pacman.style.left = (parsedLeft - 2) + 'px'; break;
        case 's': pacman.style.top = (parsedTop + 2) + 'px'; break;
        case 'd': pacman.style.left = (parsedLeft + 2) + 'px'; break;
        case 'w': pacman.style.top = (parsedTop - 2) + 'px'; break;
    }
})