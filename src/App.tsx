import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Rent A Minecraft Server</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default App
