export class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    elements() {
        return this.queue.map((item) => item)
    }

    isFull() {
        return (this.front === 0 &&
            this.rear === this.size - 1) ||
            (this.rear === (this.front - 1 + this.size) %
                this.size);
    }

    isEmpty() {
        return this.front === -1;
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log("Queue is full");
            return;
        }
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.rear = (this.rear + 1) %
                this.size;
        }
        this.queue[this.rear] = item;
        console.log(
            `${item} enqueued to the queue`);
    }

    dequeue() {
        let item;
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        item = this.queue[this.front];
        this.queue[this.front] = null
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) %
                this.size;
        }
        console.log(
            `${item} dequeued from the queue`);
        return item;
    }

    displayQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let i = this.front;
        do {
            console.log(this.queue[i]);
            i = (i + 1) % this.size;
        } while (i !== (this.rear + 1) %
        this.size);
    }

    getFront() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        console.log(
            `Front element: ${this.queue[this.front]}`);
    }

    getRear() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        console.log(
            `Rear element: ${this.queue[this.rear]}`);
    }
}

//
// const queue = new CircularQueue(5);
// console.log(
//     "Is the queue empty? ",
//     queue.isEmpty());
// console.log(
//     "Is the queue full? ",
//     queue.isFull());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// console.log(
//     "Is the queue empty? ",
//     queue.isEmpty());
// console.log(
//     "Is the queue full? ",
//     queue.isFull());
// queue.displayQueue();
// queue.dequeue();
// queue.dequeue();
// queue.displayQueue();
// queue.getFront();
// queue.getRear();