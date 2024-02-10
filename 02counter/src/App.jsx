import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)
  const increase = () =>{
   
    if (count<25) {
      
      setCount(count+1)
    }
  }
  const decrease = () => {
    if (count>0) {
      
      setCount(count-1)
    }
  }

  return (
    <>
     <button onClick={increase}>Add{count}</button>
     <br></br>
     <button onClick={decrease}>Remove{count}</button>
    </>
  )
}

export default App
