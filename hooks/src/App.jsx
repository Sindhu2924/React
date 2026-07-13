import React from 'react'
import Greetings from './Greetings'
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  // let name = "Sandhya";

  let[name,setName] = useState("Sandhya");
  let [color,setColor]=useState("Red");
  let[count,setCount]=useState(0);

useEffect(()=>{
  setTimeout(()=>{
      setCount((count)=>count + 1);
  },1000)
});

  
  return (
    <div>
      <h1>Good Morning {name}</h1>
      <Greetings name={name}/>
      <button onClick={()=>setName("Anitha")}>Change Name</button>
      <h1>Favourite Color is: {color}</h1>
      <button onClick={()=>setColor("Pink")}>Reveal Favourite Color</button>
      <h1>Counter:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>&nbsp;&nbsp;
      <button onClick={()=>setCount(count-1)}>Decrement Count</button>&nbsp;&nbsp;
      <button onClick={()=>setCount(count=0)}>Reset Count</button>

      <h2>Time Starts Now: {count}</h2>
    </div>
  )
}
