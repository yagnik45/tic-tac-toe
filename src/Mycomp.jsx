import React,{useEffect,useState} from "react";

const MyComponent=()=>{
    const[count,setcount]=useState(0);

    useEffect(()=>{
        console.log("component is displayed");
    },[]);

    useEffect(()=>{
        console.log("count is updated",count);
    
    },[count]);

    return(
        <div>
            <p>count is -{count}</p>
            <button onClick={()=>setcount(count+1)}>increment</button>
            <button onClick={()=>setcount(count-1)}>decrement</button>
        </div>
    );
};
export default MyComponent;