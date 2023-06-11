class Broadcast extends Listener {
    constructor(thisArg, callback, message) {
        super(thisArg, callback);
        this.message = message;
    }
}