import React, { useMemo, useState } from 'react';

const UseMemoo = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
    
   const ThatsMemo=useMemo(function MultiCount(){
    console.warn(MultiCount)
    return count*5
   },[count])
    return (
        <div>
            <h1> Use Memo Hook in React JS</h1>
            <h2>count :{count}</h2>
            <h2>Item :{item}</h2>
            <h2>MemoCount :{ThatsMemo}</h2>

            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setItem(item * 10)}>Update Item</button>
        </div>
    );
};

export default UseMemoo;