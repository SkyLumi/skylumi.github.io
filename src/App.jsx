import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Introducing Syahrial Rafky</h1>
      <p>
        Hi! I'am Syahrial Rafky or you can just call me Rafky to avoid tongue cramps, an undergraduate Information Technology student that can do nothing!
      </p>
      <h2>My hard skill</h2>
    </>
  )
}

export default App
