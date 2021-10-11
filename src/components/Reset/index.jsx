/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/Button';
import style from './style.module.css';

export default ({ total, tip }, props) => {
  const reset = () => {
    const now = new Date();
    props.onReset(now);
  };

  return (
    <div>
      <div className={style.resultsContainer}>
        <div className={style.informativeText}>
          Tip Amount
        </div>
        <div className={style.personText}>
          / person
        </div>

        <div className={style.numbers}>
          { tip ? Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tip) : '$0.00'}
        </div>

        <div className={style.informativeText}>
          Total
        </div>
        <div className={style.personText}>
          / person
        </div>

        <div className={style.numbers}>
          { total ? Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total) : '$0.00'}
        </div>

        <Button disabled={false} className={style.resetButton} onClick={() => reset}>RESET</Button>
      </div>
    </div>
  );
};
