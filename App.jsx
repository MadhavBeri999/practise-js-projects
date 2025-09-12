import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addValue = ()=>{
    

    
    if(count<=4){
      count = count +1
      setCount(count);

     
    }
    
    
    
  }
  const removeValue = ()=>{
    if(count>0){
      count = count -1
      setCount(count);

     
    }
    
   
    
  }
  
  

  return (
    <>
      <h1>Assignment 1 of the famous counter question</h1>
      <h5>Rules
        <ol><li>
        the max count is 20 </li>
        <li>The minimum count is 0</li></ol></h5>
        <h3>Current value of the counter is {count}</h3>
        <button onClick={addValue}>Press me to increase the increment</button>
        <span>The new value is {count}</span>
        <footer>
          <span>Value Befor removing is {count}</span>
          <button onClick={removeValue}>Press me to decrease the increment</button>
          <span>The new value is {count}</span>

        </footer>
        
        
    </>
  )
}

export default App
