import React, { useRef, useEffect } from 'react';
import skylumiLogo from './assets/logo.png';
import layer1 from './assets/layer_1.png';
import layer2 from './assets/layer_2.png';
import pohon_kanan from './assets/pohon_kanan.png';
import pohon_kiri from './assets/pohon_kiri.png';
import matahari from './assets/matahari.png';
import rafky from './assets/rafky.png';
import './App.css';

function App() {
  const judulRef = useRef(null);
  const pohonKananRef = useRef(null);
  const pohonKiriRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;

      if (judulRef.current) {
        judulRef.current.style.marginTop = value * 1.5 + 'px';
      }
      if (pohonKananRef.current) {
        pohonKananRef.current.style.left = value * 0.5 + 'px';
      }
      if (pohonKiriRef.current) {
        pohonKiriRef.current.style.left = value * -0.5 + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <header>
          <a href="https://github.com/SkyLumi" target="_blank" rel="noopener noreferrer">
            <img src={skylumiLogo} className="logo" alt="Logo" />
          </a>
          <nav className='navigasi'>
            <a href='#'>About me</a>
            <a href='#'>Skills</a>
            <a href='#'>Portofolio</a>
            <a href='#'>Contact</a>
          </nav>
        </header>
        <section className="satu">
          <img src={layer1} id='gunung1' alt="Layer 1"/>
          <img src={matahari} id='matahari' alt="Matahari"/>
          <h1 id='judul' ref={judulRef}>Syahrial Rafky</h1>
          <img src={layer2} id='gunung2' alt="Layer 2"/>
          <img src={pohon_kanan} id='pohonKanan' ref={pohonKananRef} alt="Pohon Kanan"/>
          <img src={pohon_kiri} id='pohonKiri' ref={pohonKiriRef} alt="Pohon Kiri"/>
        </section>

        <section className="dua">
          <h2>About Me</h2>
          <div className='container_row'>
            <p>An undergraduate student in Information Technology at Jember University who is able to automation and having interest field about Cybersecurity especially reverse engineering.</p>
            <div className='imagebox'>
              <img src={rafky} alt="Rafky"/>
              <h1 id='background_nama'>Syahrial<br/>Rafky</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
