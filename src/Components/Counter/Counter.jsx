import './Counter.css' ;
import { useState } from "react";

function Counter () {
    const [counter , setCounter ] = useState(0);

    function Increment () {
        setCounter (counter + 1)
    }

    function Decrement () {
        if ( counter>0) {
            setCounter (counter - 1)
        }
    }
    return(
        <div className='Counter'>
        <button onClick={Increment}>+</button>
        <label id='counter'>{counter}</label>
        <button onClick={Decrement}>-</button>
        </div>
    )
}

export default Counter ;
