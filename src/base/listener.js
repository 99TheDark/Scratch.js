class Listener {
    #thisArg;
    #callback;

    constructor(thisArg, callback) {
        this.#thisArg = thisArg;
        this.#callback = callback;
    }

    run() {
        this.#callback.call(this.#thisArg);
    }
}