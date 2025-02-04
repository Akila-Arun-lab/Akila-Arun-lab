import CounterDisplay from "./CounterDisplay";
import CountUpdateComponent from "./CountUpdateComponent";
import  React from "react";

function APICallComponent(){
   console.log("Hello World");
   return (
    <div></div>
   )
}

export default React.memo(APICallComponent);