// Control
function forever(body) {
    GameData.listeners.forever.push(body);
};

function repeat(times, body) {
    for(let i = 0; i < times; i++) {
        body();
    }
};

function broadcast(message) {
    GameData.listeners.broadcast.forEach(listener => {
        if(listener.message == message) listener.run();
    });
};

// Sensing
var mouseX = 0;
var mouseY = 0;
addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    const [mx, my] = [e.clientX - rect.x, e.clientY - rect.y];
    mouseX = (mx / rect.width - 0.5) * GameData.width
    mouseY = (my / rect.height - 0.5) * GameData.height;
});

var mouseDown = false;
addEventListener("mousedown", () => mouseDown = true);
addEventListener("mouseup", () => mouseDown = false);

// Operators
function pickRandom(min, max) {
    const mag = Math.abs(max - min);
    if(min < max) {
        return Math.random() * mag + min;
    } else {
        return Math.random() * mag + max;
    }
};

function round(val) {
    return Math.round(val);
};

function abs(val) {
    return Math.abs(val);
};

function floor(val) {
    return Math.floor(val);
};

function ceiling(val) {
    return Math.ceil(val);
};

function sqrt(val) {
    return Math.sqrt(val);
};

function sin(ang) {
    return Math.sin(GameData.angle(ang));
};

function cos(ang) {
    return Math.cos(GameData.angle(ang));
};

function tan(ang) {
    return Math.tan(GameData.angle(ang));
};

function asin(ang) {
    return Math.asin(GameData.angle(ang));
};

function acos(ang) {
    return Math.acos(GameData.angle(ang));
};

function atan(ang) {
    return Math.atan(GameData.angle(ang));
};

function ln(val) {
    return Math.log(val);
};

function log(val) {
    return Math.log10(val);
};