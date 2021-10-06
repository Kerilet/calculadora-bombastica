/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/Button';
import style from './style.module.css';

export default (props) => {
  const { total } = props;
  const { tip } = props;

  const reset = () => {
    console.log('hello');
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
          {tip || 0}
        </div>

        <div className={style.informativeText}>
          Total
        </div>
        <div className={style.personText}>
          / person
        </div>

        <div className={style.numbers}>
          {total || 0}
        </div>

        <Button disabled={false} onClick={reset}>Reset</Button>
      </div>
    </div>
  );
};
