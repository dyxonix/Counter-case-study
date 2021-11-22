import React,{useState} from 'react';


const Counter = () => {
    const [count,setCount] = useState(0)
    const [isActive, setIsActive] = useState('');
    // const [isBackground, changeBackground] = useState(true);

    const toggle = () => {
        setIsActive(!isActive);
    }

    function increment() {
        setCount(count + 1)
    }

    function reset() {
        setCount(0)
    }

    function decrement() {
        setCount(Math.max(0, count - 1))

    }


    // function changeColor() {
    //     if (count % 2 === 0)
    //         changeBackground(isBackground == true);
    //     else {
    //         changeBackground(isBackground == false);
    //     }
    // }




    return(
        <div className="App">
            {/*<div onClick={changeColor} style={{backgroundColor: isBackground ? 'red' : 'blue',}}>*/}

                <h1>{count}</h1>
                <h2 onClick={toggle}>{count === 0 ? '' : count % 2 === 0 ? 'Четное' :'Нечетное'}</h2>
                <button className='rm' onClick={increment}>+</button>
                <button onClick={reset}>reset</button>
                <button onClick={decrement}>-</button>
            </div>
        // </div>
    )
};

export default Counter;
