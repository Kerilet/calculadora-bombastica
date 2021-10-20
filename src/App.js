/* eslint-disable max-len */
import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Reset from './components/Reset';
import style from './App.module.css';

function App() {
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [reseted, setReseted] = useState(new Date());

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

    </div>
  );
}

export default App;
