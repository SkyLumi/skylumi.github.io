import { useState } from 'react'
import skylumiLogo from './assets/logo.png'
import layer1 from './assets/layer_1.png'
import layer2 from './assets/layer_2.png'
import pohon_kanan from './assets/pohon_kanan.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <header>
        <a href="https://github.com/SkyLumi" target="_blank">
          <img src= {skylumiLogo} className="logo"/>
        </a>
        <nav className='navigasi'>
          <a href='#'>Home</a>
          <a href='#'>About me</a>
          <a href='#'>Skills</a>
          <a href='#'>Portofolio</a>
          <a href='#'>Contact</a>
        </nav>
        </header>
        <section className="satu">
          <h1 id='judul'>Syahrial Rafky</h1>
          <img src= {layer1} id='gunung1'/>
          <img src= {layer2} id='gunung2'/>
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
