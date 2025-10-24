import { useState } from 'react';
import React from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    function reset(){
        setCount(0);
    }

    return (
        <div className='container'>
            <p className='display'>Counter: {count}</p>
            <button className='increment' onClick={increment}>Increment</button>        
            <button className='decrement' onClick={decrement}>Decrement</button>
            <button className='reset' onClick={reset}>Reset</button>
        </div>
    );
}
export default Counter;


