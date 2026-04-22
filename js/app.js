

function keyHandler(e) {
    const keyPress = e.key;

    if (!keyPress.includes("Arrow")) { return }
    switch (keyPress) {
        case "ArrowUp":
            console.log(keyPress);
            y = y + 1;
            break;

        case "ArrowDown":
            console.log(keyPress);
            break;

        case "ArrowLeft":
            console.log(keyPress);
            break;

        case "ArrowRight":
            console.log(keyPress);
            break;

        default:
            console.log("Not a valid movement key");
    }
}

window.addEventListener("keydown", keyHandler);