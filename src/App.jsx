import './App.css'
import {useQueue} from "./utils/hooks";
import {useState} from "react";

function App() {
    const [queueSize, setQueueSize] = useState(6)
    const [enQueueValue, setEQueueValue] = useState(10)


    const [queue, {enqueue, dequeue, peek}] = useQueue(queueSize, 'circular')
    return (
        <div className="flex flex-col items-center justify-center m-auto space-y-16 pt-20">
            <h1 className="text-4xl font-bold text-blue-800"> Demo of circular queue</h1>

            <p className="text-2xl font-medium ">Front Element : {peek}</p>

            <div className={`flex w-[${70 * queueSize}px] bg-red-100 border-y-4 border-gray-800 py-3 justify-end`}>
                {queue.map((item, index) => {
                    return <div
                        className="
                        rounded-lg
                        border-2
                        border-blue-800
                        py-2 px-4
                        text-center
                        mx-2
                        items-center
                        hover:bg-blue-800
                        hover:text-gray-50
                        hover:border-blue-800
                        "
                        key={index}>{item ? item : '-'}</div>;
                })}
            </div>
            <div className="flex items-end space-x-36">
                <div>
                    <button className="button" onClick={() => dequeue()} warning>
                        Dequeue
                    </button>
                </div>
                <div className="flex space-x-2">
                    <input
                        type="number"
                        className="w-16 border-2 rounded-md border-blue-800 py-2 px-3"
                        min={0}
                        value={enQueueValue}
                        onChange={(e) => {
                            setEQueueValue(parseInt(e.target.value))
                        }}
                    />
                    <button className="button" onClick={() => enqueue(enQueueValue)}>Enqueue
                    </button>
                </div>
            </div>
            <div className="flex items-center space-x-10">

                <p className="text-2xl font-medium ">Length of Queue : {length}</p>
                <div className="space-x-2">
                    <input
                        type="number"
                        className="w-16 border-2 rounded-md border-blue-800 py-2 px-3"
                        min={0}
                        value={queueSize}
                        onChange={(e) => {
                            setQueueSize(parseInt(e.target.value))
                        }}

                    />
                    <button className="button"œ warning>
                        Change
                    </button>
                </div>
            </div>

        </div>
    )
}

export default App
