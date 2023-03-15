import { useState } from "react"

const UseStateHook=()=>{
    const [count,setCount]=useState(0);
    return <>    
    {count}
    <button onClick={()=>setCount(count+1)}>increment</button>
    <button onClick={()=>setCount(count-1)}>decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </>
}
 export default UseStateHook