export var paddle = new Sprite({
    y: -140,
    costumes: [
        new Costume("paddle", "paddle.svg")
    ]
});

paddle.on("flag", function() {
    this.forever(() => {
        this.setX(mouseX);
    });
});