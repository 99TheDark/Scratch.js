class Sprite {
    #data = {
        x: 0,
        y: 0,
        size: 100,
        direction: 90,
        visible: true,
        costumes: [],
        costumeNumber: 0
    };

    constructor(data) {
        for(const key in data) {
            if(typeof data[key] == typeof this.#data[key] && data[key]) {
                this.#data[key] = data[key];
            }
        }

        GameData.sprites.push(this);
    }

    on(listener, body) {
        switch(listener) {
            case "flag":
                body.call(this);
                break;
        }
    }
    forever(body) {
        GameData.listeners.forever.push(body);
    }

    // Motion
    move(steps) {
        this.changeX(steps * cos(90 - this.#data.direction));
        this.changeY(steps * sin(90 - this.#data.direction));
    }
    turnClockwise(degrees) {
        this.#data.direction -= degrees;
    }
    turnCounterClockwise(degrees) {
        this.#data.direction += degrees;
    }
    pointInDirection(degrees) {
        this.#data.direction = degrees;
    }
    changeX(change) {
        this.#data.x += change;
    }
    setX(x) {
        this.#data.x = x;
    }
    changeY(change) {
        this.#data.y += change;
    }
    setY(y) {
        this.#data.y += y;
    }
    ifOnEdgeBounce() {
        const {x, y} = this.#data;
        const {width, height} = this.__getScaledSize();

        const top = GameData.top < y + height / 2;
        const bottom = GameData.bottom > y - height / 2;

        const left = GameData.left > x - width / 2;
        const right = GameData.right < x + width / 2;

        if(top || bottom) {
            this.#data.direction = 180 - this.#data.direction;
        }
        if(left || right) {
            this.#data.direction = 360 - this.#data.direction;
        }
    }

    // Sensing
    touching(sprite) {
        return GameData.rectRect(this.__getScaledSize(), sprite.__getScaledSize());
    }

    get x() {
        return this.#data.x;
    }
    get y() {
        return this.#data.y;
    }
    get direction() {
        return this.#data.direction;
    }

    __getCostume() {
        return Object.values(this.#data.costumes)[this.#data.costumeNumber];
    }
    __getScaledSize() {
        const costume = this.__getCostume();
        const size = this.#data.size;
        return {
            x: this.#data.x,
            y: this.#data.y,
            width: costume.width * size / 100,
            height: costume.height * size / 100
        };
    }
    __draw(ctx) {
        const canvas = ctx.canvas;
        const costume = this.__getCostume();
        const res = GameData.res;
        const {x, y, size} = this.#data;
        const [width, height] = [costume.width * res * size / 100, costume.height * res * size / 100];

        ctx.save();
        ctx.translate(x * res + canvas.width / 2, canvas.height / 2 - y * res);
        ctx.rotate(GameData.angle(90 - this.#data.direction));
        ctx.drawImage(costume.img, - width / 2, - height / 2, width, height);
        ctx.restore();
    }
}