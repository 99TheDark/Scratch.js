// Sensing
var mouseX = 0;
var mouseY = 0;
addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    const [mx, my] = [e.clientX - rect.x, e.clientY - rect.y];
    mouseX = (mx / rect.width - 0.5) * GameData.width
    mouseY = (my / rect.height - 0.5) * GameData.height;
});

// Operators
function cos(ang) {
    return Math.cos(GameData.angle(ang));
}
function sin(ang) {
    return Math.sin(GameData.angle(ang));
}
function tan(ang) {
    return Math.tan(GameData.angle(ang));
}
function abs(val) {
    return Math.abs(val);
}
function pickRandom(min, max) {
    const mag = Math.abs(max - min);
    if(min < max) {
        return Math.random() * mag + min;
    } else {
        return Math.random() * mag + max;
    }
}