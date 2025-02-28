
export default function TrafficLight() {
    function stopLight() {
        alert("Stop");
    }

    function startLight() {
        alert("Go");
    }

    function resetLight() {
        alert("Reset");
    }


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Traffic Light</h2>
                    <div className="flex justify-center mt-4">
                        <div id="red" className="w-10 h-10 bg-red-500 rounded-4xl hidden"></div>
                        <div id="yellow" className="w-10 h-10 bg-yellow-500 rounded-4xl mx-2 hidden"></div>
                        <div id="green" className="w-10 h-10 bg-green-500 rounded-4xl hidden"></div>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="h-10 bg-red-500 rounded-sm text-white p-1 mx-2" onClick={
                        () => {
                            stopLight();
                        }
                    }>
                        Stop
                    </button>
                    <button className="w-10 h-10 bg-green-500 rounded-sm text-white p-1 mx-2" onClick={
                        () => {
                            startLight();
                        }
                    }>
                        Start
                    </button>
                    <button className="w-10 h-10 bg-gray-500 rounded-sm text-white p-1 mx-2" onClick={
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
