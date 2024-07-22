import {useCallback, useEffect, useState} from 'react';
import {CircularQueue} from "./circularQueue";
import {SimpleQueue} from "./simple";

const initializeQueue = (size, type) => {
    let _queue;
    switch (type) {
        case 'circular':
            console.log('Initiating Circular Queue...');
            _queue = new CircularQueue(size)
            break;
        case 'simple':
            console.log('Initiating Simple Queue...');
            _queue = new SimpleQueue(size)
            // Expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        default:
            console.log(`Sorry, this queue type is not implemented yet.`);
    }
    return _queue
}

export function useQueue(size, type) {
    const _queue = initializeQueue(size, type)
    const [queueInstance, setQueueInstance] = useState(_queue);
    const [queue, setQueue] = useState(queueInstance ? queueInstance.elements() : []);

    useEffect(() => {
        setQueueInstance(initializeQueue(size, type))
    }, [size, type])


    const peek = useCallback(() => {
        if (queue.length > 0) {
            return queue[0];
        }
        return undefined;
    }, [queue]);

    const enqueue = useCallback(
        (item) => {
            queueInstance.enqueue(item);
            setQueueInstance(queueInstance)
            setQueue(queueInstance.elements())

        }, [queueInstance]
    );

    const dequeue = useCallback(
        () => {
            console.log(queueInstance, 22222222)
            queueInstance.dequeue();
            console.log(queueInstance, 3333333333)
            setQueueInstance(queueInstance)
            setQueue(queueInstance.elements())
        }, [queueInstance]
    );

    const controls = {
        dequeue,
        enqueue,
        length: queue.map(elmt => elmt === 1).length,
        peek,
    };

    return [queue, controls];
}