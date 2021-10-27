/* eslint-disable no-console */
import React, { useRef, useEffect, useState } from 'react';
import style from './style.module.css';

export default () => {
  const [showImage, setShowImage] = useState(false);

  let codes1 = [];

  let tortureRef = useRef();
  const spanRef = useRef();

  window.onclick = (event) => {
    if (event.target === tortureRef) {
      tortureRef.style.display = 'none';
    }
  };

  useEffect(() => {
    const writeKonamiCode = () => {
      tortureRef += '<img src="https://thumbs.gfycat.com/AllConstantChital-size_restricted.gif" alt="Konami Kode duuude!" loading="here\'s an easter egg!">';
    };

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

    const konamiCheck = (callback) => {
      document.addEventListener('keyup', (event) => {
        codes1.push(event.key);
        const joined = codes1.join('-');
        if (konamiKode.startsWith(joined)) {
          if (konamiKode === joined) {
            callback();
            setShowImage(true);
            tortureRef.style.display = 'block';
            spanRef.onclick = () => {
              tortureRef.style.display = 'none';
            };
          }
        } else {
          codes1 = [];
        }
        console.log(joined);
      });
    };
    konamiCheck(writeKonamiCode);
  }, []);

  return (
    <>
      <div ref={tortureRef} className={showImage ? style.tortureDance : style.easterEgg}>
        <div className="modalContent">
          <span className="close" ref={spanRef}>&times;</span>
          <img src="https://thumbs.gfycat.com/AllConstantChital-size_restricted.gif" alt="Konami Kode duuude!" loading="here\'s an easter egg!" />
        </div>
      </div>
    </>
  );
};
