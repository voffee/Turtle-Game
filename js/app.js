
// Variables for movement of turtle
const turtle = document.querySelector(".turtle-img");
let x = 0;
let y = 0;
let speed = 30;
let isFlipped = false;

function keyHandler(e) {
    const keyPress = e.key;

    if (!keyPress.includes("Arrow")) { return }
    switch (keyPress) {
        case "ArrowUp":
            y = y - (1 * speed);
            turtle.style.setProperty('--y', `${y}px`);
            break;

        case "ArrowDown":
            y = y + (1 * speed);
            turtle.style.setProperty('--y', `${y}px`);
            break;

        case "ArrowLeft":
            x = x - (1 * speed);
            turtle.style.setProperty('--x', `${x}px`);
            isFlipped = true;
            turtle.style.setProperty('--degree', `${isFlipped ? '180deg' : '0deg'}`);
            break;

        case "ArrowRight":
            x = x + (1 * speed);
            turtle.style.setProperty('--x', `${x}px`);
            isFlipped = false;
            turtle.style.setProperty('--degree', `${!isFlipped ? '0deg' : '180deg'}`);
            break;

        default:
            console.log("Not a valid movement key");
    }
}

window.addEventListener("keydown", keyHandler);
console.log(turtle.style);