import {paddle} from "./paddle.js";

var ball = new Sprite({
    y: 100,
    costumes: [
        new Costume("ball-a", "ball-a.svg")
    ]
});

ball.on("flag", function() {
    this.pointInDirection(pickRandom(-70, 70));
    forever(() => {
        this.move(4);
        this.ifOnEdgeBounce();
        if(this.touching(paddle)) {
            this.pointInDirection(180 - this.direction);
        }
    });
});