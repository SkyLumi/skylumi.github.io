import { useState } from 'react'
import skylumiLogo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <section className="satu">
        <a href="https://github.com/SkyLumi" target="_blank">
          <img src= {skylumiLogo} className="logo"/>
        </a>
          <h1>Introducing Syahrial Rafky</h1>
          <button>Start</button>
        </section>

        <section className="dua">
        <p>
          Hi! I'am Syahrial Rafky or you can just call me Rafky to avoid tongue cramps, an undergraduate Information Technology student that can do nothing!
        </p>
        <h2>My hard skill</h2>
        </section>
      </div>
    </>
  )
}

export default App
