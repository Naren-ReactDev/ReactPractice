import { useState } from "react"


const TestFirst=()=>{

    const [count,setCount]=useState(0);
    return (
        <><div>counter:{count}</div>
        
    <button onClick={()=>setCount(count+1)}>increment</button>
   
    </> 
    )
}

export default TestFirst