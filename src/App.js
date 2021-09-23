import React from 'react';
import Calculator from './components/Calculator';
import Reset from './components/Reset';
import style from './App.module.css';

function App() {
  return (
    <div className={style.App}>
      <header className={style.logo}>
        <div>
          <img src="./logo.svg" alt="Splitter" />
        </div>
      </header>
      <article className={style.mainContainer}>
        <Calculator />
        <Reset />
      </article>
      <div className={style.attribuition}>
        Challenge by Frontend Mentor.
        Coded by Kerilet.
      </div>
    </div>
  );
}

export default App;
