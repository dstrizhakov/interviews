class EventEmitter {
    constructor() {
        this.subscribers = new Set()
    }

    addSubscriber(subscriber) {
        if(this.subscribers.has(subscriber)) return;
        this.subscribers.add(subscriber);
    }
    removeSubscriber(subscriber) {
        if(!this.subscribers.has(subscriber)) return;
        this.subscribers.delete(subscriber);
    }
    clearSubscribers() {
        this.subscribers.clear();
    }
    emit(event) {
        this.subscribers.forEach(subscriber => subscriber(event))
    }
}

const door = new EventEmitter();

const dogsListener = (event) => {
    console.log(`Dogs listener get: ${event}`);
    if (event === "WOOF!") {
        console.log("Hey dog!!!");
    }
};

const catsListener = (event) => {
    console.log(`Cats listener get: ${event}`);
    if (event === "MIAU!") {
        console.log("Hey kitty!!!");
    }
}
door.addSubscriber(dogsListener);
door.addSubscriber(catsListener)

door.emit("WOOF!");
door.emit("MIAU!");
door.emit("BBWOOF!!!");

door.clearSubscribers()
door.emit("WOOF!");
door.emit("BBWOOF!!!");