import React,{useState, useEffect} from 'react';

import './counter.css';


const Counter = () => {
    const [count, setCount] = useState(0);
    const [label, setLabel] = useState('');
    const [backgroundClassList, setBackgroundClassList] = useState('');


    useEffect(
        () => {
            formatLabel();
            changeColor();
        },
        [count],
      );

    function increment() {
        setCount(count + 1)
    }

    function reset() {
        setCount(0)
    }

    function decrement() {
        if (count === 0) {
            return;
        }

        setCount(count - 1)
    }

    function formatLabel() {
        if (count === 0) {
            setLabel('');
            return;
        }

        const result = count % 2 === 0 ? 'Четное' : 'Нечетное';
        setLabel(result);
    }


    function changeColor() {
        if (count === 0) {
            setBackgroundClassList('');
            return;
        }

        if (count % 2 === 0)
            setBackgroundClassList('counter_yellow');
        else {
            setBackgroundClassList('counter_blue');
        }
    }




    return(
        <div className={backgroundClassList}>
            <h1>{count}</h1>
            <h2>{label}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <button className='rm' onClick={increment}>+</button>
        </div>
    )
};

export default Counter;
