import APICallComponent from "./APICallComponent";
import CounterDisplay from "./CounterDisplay";
import CountUpdateComponent from "./CountUpdateComponent";
import React from "react"; 
import{  useState } from "react";

function CounterComponent(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return(
    //concept of SRP - Single Response property - each component is responsible only for one job
    <div>
        <APICallComponent/>
        <CounterDisplay count={count}/> 
        <CountUpdateComponent increment={increment}/>
    </div>)
}

export default CounterComponent;