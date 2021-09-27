/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/Button';
import style from './style.module.css';

export default (props) => {
  const { total } = props;

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
          0.00
        </div>

        <div className={style.informativeText}>
          Total
        </div>
        <div className={style.personText}>
          / person
        </div>

        <div className={style.numbers}>
          {total}
        </div>

        <Button disabled={false}>Reset</Button>
      </div>
    </div>
  );
};
