import { useState, useEffect } from 'react'
import skylumiLogo from './assets/logo.png'
import layer1 from './assets/layer_1.png'
import layer2 from './assets/layer_2.png'
import pohon_kanan from './assets/pohon_kanan.png'
import pohon_kiri from './assets/pohon_kiri.png'
import matahari from './assets/matahari.png'
import rafky from './assets/rafky.jpg'
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
          <a href='#'>About me</a>
          <a href='#'>Skills</a>
          <a href='#'>Portofolio</a>
          <a href='#'>Contact</a>
        </nav>
        </header>
        <section className="satu">
          <img src= {layer1} id='gunung1'/>
          <img src= {matahari} id='matahari'/>
          <h1 id='judul'>Syahrial Rafky</h1>
          <img src= {layer2} id='gunung2'/>
          <img src= {pohon_kanan} id='pohonKanan'/>
          <img src= {pohon_kiri} id='pohonKiri'/>
        </section>

        <section className="dua">
          <h2>About Me</h2>
          <div className='container_row'>
            <p>I have skills in data scraping, computer vision, and game development. I am a student majoring in Information Technology at the University of Jember. Additionally, I am interested in delving into the field of data forensics.</p>
            <img src= {rafky}/>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
