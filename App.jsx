import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card channel  = "Chai aur Code"  btnText = "Hello mere dabao" />
    <br/>
    <Card/>
      
    </>
  )
}

export default App
