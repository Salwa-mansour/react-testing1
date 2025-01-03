import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0)
    return(
        <div>
       <p data-testid="counter-value"  >{count}</p>
       <button onClick={()=>{setCount(count +1)}} >increment</button>
        </div>
    )
}

export default Counter