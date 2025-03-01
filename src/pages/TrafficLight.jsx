
import { useState } from 'react';
export default function TrafficLight() {

    const [green, setGreen] = useState(false);
    const [yellow, setYellow] = useState(false);
    const [red, setRed] = useState(true);

    function stopLight() {
        setRed(true)
        setGreen(false)
        setYellow(false)
    }

    function startLight() {
        setRed(false)
        setGreen(true)
        setYellow(false)
    }

    function yelloLight() {
        setRed(false)
        setGreen(false)
        setYellow(true)
    }


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Traffic Light</h2>
                    <div className="flex justify-center mt-4">
                        <div id="red" className={red ? 'w-30 h-30 bg-red-500 rounded-4xl' : 'hidden'}></div>
                        <div id="yellow" className={yellow ? 'w-30 h-30 bg-yellow-500 rounded-4xl' : 'hidden'}></div>
                        <div id="green" className={green ? 'w-30 h-30 bg-green-500 rounded-4xl' : 'hidden'}></div>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="w-10 h-10 bg-red-500 rounded-sm text-white p-2 m-1" onClick={
                        () => {
                            stopLight();
                        }
                    }>
                        Stop
                    </button>

                    <button className="w-10 h-10 bg-yellow-500 rounded-sm text-white m-1" onClick={
                        () => {
                            yelloLight();
                        }
                    }>
                        Hold
                    </button>
                    <button className="w-10 h-10 bg-green-500 rounded-sm text-white m-1" onClick={
                        () => {
                            startLight();
                        }
                    }>
                        Go
                    </button>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="w-30 h-10 bg-black rounded-sm text-white m-1" onClick={
                        () => {
                            resetLight();
                        }
                    }>
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
}
