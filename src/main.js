const canvas = document.getElementById("canvas");

fetch("../project/scripts")
    .then(file => file.text())
    .then(text => new DOMParser().parseFromString(text, "text/html"))
    .then(doc => {
        const files = [...doc.querySelectorAll("#files>li>a")];
        files.shift();
        files.forEach(file => {
            const script = document.createElement("script");
            script.classList.add("scratch-script");
            script.type = "module";
            script.src = file.href;
            document.body.appendChild(script);
        });
    })

Array.prototype.remove = function(item) {
    const idx = this.indexOf(item);
    if(idx != -1) {
        this.splice(idx, 1);
    }
};

var GameData = {
    listeners: {
        flag: [],
        forever: [],
        keypress: []
    },
    images: [],
    sprites: [],
    loaded: function() {
        if(this.images.length == 0) {
            this.listeners.flag.forEach(func => func());
            this.run();
        }
    },
    run: function() {
        const ctx = this.context;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.listeners.forever.forEach(body => body());

        this.sprites.forEach(sprite => sprite.__draw(ctx));

        requestAnimationFrame(() => this.run.call(this));
    },
    angle: deg => deg * Math.PI / 180,
    rectRect: (rect1, rect2) => {
        return abs(rect1.x - rect2.x) * 2 < rect1.width + rect2.width && abs(rect1.y - rect2.y) * 2 < rect1.height + rect2.height;
    },
    context: canvas.getContext("2d"),
    width: 480,
    height: 360,
    res: 4
};

[GameData.top, GameData.bottom, GameData.left, GameData.right] = [GameData.height / 2, -GameData.height / 2, - GameData.width / 2, GameData.width / 2];

canvas.width = GameData.width * GameData.res;
canvas.height = GameData.height * GameData.res;