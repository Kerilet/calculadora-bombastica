/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Reset from './components/Reset';
import style from './App.module.css';

function App() {
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [reseted, setReseted] = useState(new Date());

  let codes1 = [];

  const konamiKode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    'Enter',
  ].join('-');

  const playAudio = () => {
    const audio = document.getElementById('audio1');
    audio.play();
  };

  const writeKonamiCode = () => {
    const tortureDanceDIV = document.getElementById('easterEgg');
    tortureDanceDIV.innerHTML += '<img src="https://thumbs.gfycat.com/AllConstantChital-size_restricted.gif" alt="Konami Kode duuude!" loading="here\'s an easter egg!">';
    playAudio();
  };

  const konamiCheck = (callback) => {
    document.addEventListener('keyup', (event) => {
      codes1.push(event.key);
      const joined = codes1.join('-');
      if (konamiKode.startsWith(joined)) {
        if (konamiKode === joined) {
          callback();
        }
      } else {
        codes1 = [];
      }
      console.log(codes1);
    });
  };

  konamiCheck(writeKonamiCode);

  return (
    <div className={style.App}>
      <header className={style.logo}>
        <div>
          <img
            src="./logo.svg"
            alt="Splitter"
          />
        </div>
      </header>
      <article className={style.mainContainer}>
        <Calculator
          onAddTotal={
            (value) => setTotal(value)
        }
          onAddTip={
          (value) => setTip(value)
        }
          reseted={reseted}
        />

        <Reset total={total} tip={tip} onReset={(value) => setReseted(value)} />
      </article>
      <div className={style.attribuition}>
        Challenge by Frontend Mentor.Coded by Kerilet.

      </div>
      <div id="easterEgg" className={style.easterEgg} />
      <audio id="audio1" src="./sfx/canzoniPreferite.mp3" />
    </div>
  );
}

export default App;
