import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Reset from './components/Reset';
import KonamiCode from './components/KonamiCode';
import style from './App.module.css';

function App() {
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [reseted, setReseted] = useState(new Date());

  return (
    <div className={style.App} data-testid="App">
      <header className={style.logo}>
        <div>
          <img
            src="./logo.svg"
            alt="Splitter"
          />
        </div>
      </header>
      <article className={style.mainContainer} data-testid="konami">
        <Calculator
          onAddTotal={
            (value) => setTotal(value)
        }
          onAddTip={
          (value) => setTip(value)
        }
          reseted={reseted}
        />
        <KonamiCode />
        <Reset total={total} tip={tip} onReset={(value) => setReseted(value)} />
      </article>
      <div className={style.attribuition}>
        Challenge by Frontend Mentor.Coded by Kerilet.

      </div>
    </div>
  );
}

export default App;
