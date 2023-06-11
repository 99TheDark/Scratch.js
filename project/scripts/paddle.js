export var paddle = new Sprite({
    y: -140,
    costumes: [
        new Costume("paddle", "paddle.svg")
    ]
});

paddle.flagClicked(function() {
    forever(() => {
        this.setX(mouseX);
    });
});