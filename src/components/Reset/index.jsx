/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import style from './style.module.css';

export default ({
  total, tip, onReset,
}) => {
  const reset = () => {
    const now = new Date();
    onReset(now);
    // const scrollToTop = () => {
    //   const rootDocument = document.getElementById('root');
    //   rootDocument.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   });
    // };
    // scrollToTop();
  };

  return (
    <div>
      <div className={style.resultsContainer}>
        <div>
          <div className={style.conjointedInfo}>
            <div className={style.informativeText}>
              Tip Amount
              <div className={style.personText}>
                / person
              </div>
            </div>

            <div className={style.numbers} data-testid="tipText">
              {tip ? Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tip) : '$0.00'}
            </div>
          </div>

          <div className={style.conjointedInfo}>
            <div className={style.informativeText}>
              Total
              <div className={style.personText}>
                / person
              </div>
            </div>

            <div className={style.numbers} data-testid="totalText">
              {total ? Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total) : '$0.00'}
            </div>
          </div>
        </div>
        <button type="button" data-testid="resetButton" disabled={!total} className={total ? style.resetButton : style.disabledButton} onClick={(ev) => reset(ev)}>
          RESET
        </button>
      </div>
    </div>
  );
};
