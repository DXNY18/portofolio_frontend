import { useState } from "react";
function Counter(){
    const [count, setCount] = useState(0);
    function tambah () {
        setCount(prevCount => prevCount + 1);
 
    }
    function reset(){
        setCount(0)
    }

    return (
        <div>
        <h2>Counter Latihan</h2>
        <p>Nilai: {count}</p>
        <button onClick={reset} className="counter-btn">
            Reset
        </button>
        <button onClick={tambah} className="counter-btn">
            Tambah
        </button>
        </div>
    );
}
export default Counter;
