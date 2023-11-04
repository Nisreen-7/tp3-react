import { useState } from "react";

function CounterFc(){
const [counter,setCounter]= useState(0);
    return(
        <>
        <h1>  CounterFc : {counter}</h1>
        <button onClick={()=> setCounter(counter +1)}> + </button>
                </>
    )
}
export default CounterFc;