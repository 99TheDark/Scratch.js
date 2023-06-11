import {paddle} from "./paddle.js";

var ball = new Sprite({
    y: 100,
    costumes: [
        new Costume("ball-a", "ball-a.svg")
    ]
});

ball.flagClicked(function() {
    this.pointInDirection(pickRandom(-70, 70));
    forever(() => {
        this.move(4);
        if(this.y < -152) {
            broadcast("Game Over");
            this.stop("all");
        }
        this.ifOnEdgeBounce();
        if(this.touching(paddle) && this.y > -105) {
            this.pointInDirection(180 - this.direction);
        }
    });
});