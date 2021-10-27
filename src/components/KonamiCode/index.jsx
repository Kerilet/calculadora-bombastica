/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import style from './style.module.css';

export default () => {
  const [showImage, setShowImage] = useState(false);

  let codes1 = [];

  const konamiKode = [
    'ArrowUp',
    // 'ArrowUp',
    // 'ArrowDown',
    // 'ArrowDown',
    // 'ArrowLeft',
    // 'ArrowRight',
    // 'ArrowLeft',
    // 'ArrowRight',
    // 'b',
    // 'a',
    // 'Enter',
  ].join('-');

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
    });
  };

  useEffect(() => {
    konamiCheck(() => setShowImage(true));
  }, []);

  return (
    <>
      {showImage
        && (
        <div className={style.easterEgg}>
          <div className={style.modalContent}>
            <button type="button" className="close" onClick={() => { setShowImage(false); }}>&times;</button>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AQx_KMoCgJU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
        )}
    </>
  );
};
