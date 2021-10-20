/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import style from './style.module.css';

export default ({
  total, tip, onReset, disabled, onInfo,
}) => {
  const reset = () => {
    const now = new Date();
    onReset(now);
    const scrollToTop = () => {
      document.getElementById('root').scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
    scrollToTop();
  };

  if (total) {
    onInfo(true);
  } else {
    onInfo(false);
  }

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

            <div className={style.numbers}>
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

            <div className={style.numbers}>
              {total ? Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total) : '$0.00'}
            </div>
          </div>
        </div>
        <button type="button" disabled={disabled} className={total ? style.resetButton : style.disabledButton} onClick={(ev) => reset(ev)}>
          RESET
        </button>
      </div>
    </div>
  );
};
