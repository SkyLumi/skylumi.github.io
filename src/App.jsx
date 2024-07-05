import { useState, useEffect } from 'react'
import skylumiLogo from './assets/logo.png'
import layer1 from './assets/layer_1.png'
import layer2 from './assets/layer_2.png'
import pohon_kanan from './assets/pohon_kanan.png'
import pohon_kiri from './assets/pohon_kiri.png'
import matahari from './assets/matahari.png'
import rafky from './assets/Rafky.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <header>
        <a href="https://github.com/SkyLumi" target="_blank">
          <img src= {skylumiLogo} className="logo"/>
        </a>
        <nav className='navigasi'>
          <a href='#dua'>About me</a>
          <a href='#'>Skills</a>
          <a href='#'>Portofolio</a>
          <a href='#'>Contact</a>
        </nav>
        </header>
        <section className="satu">
          <img src= {layer1} id='gunung1'/>
          <img src= {matahari} id='matahari'/>
          <h1 id='judul'>Syahrial Rafky</h1>
          <img src= {rafky} id='muka'/>
          <img src= {layer2} id='gunung2'/>
          <img src= {pohon_kanan} id='pohonKanan'/>
          <img src= {pohon_kiri} id='pohonKiri'/>
        </section>

        <section className="dua">
          <h2>About Me</h2>
          <div className='container_row'>
            <p>An undergraduate student in Information Technology at Jember University who is able to automation and having interest field about Cybersecurity especially reverse engineering.</p>

          </div>
        </section>
      </div>
    </>
  )
}

export default App
