import React, { useState } from "react";

function Changehook(){
    const [count,setCount]=useState(0)

    const increment = ()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
        count > 0 ? setCount(count-1) : setCount(0);
    }


    return(
        <div>
            <h2> count using useState</h2>
            <h3>Count value is : {count}</h3>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Changehook;