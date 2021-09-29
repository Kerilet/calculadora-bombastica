/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import style from './style.module.css';

export default (props) => {
  const percents = ['5', '10', '15', '25', '50'];

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');

  const changeBill = (ev) => {
    ev.preventDefault();
    const { value } = ev.target;
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(value)) {
      setBill(value);
    }
  };

  useEffect(() => {
    const nbill = Number.parseFloat(bill);
    const npeople = Number.parseFloat(people);
    const ntip = Number.parseFloat(tip);

    const firstValue = nbill * ntip;
    const secondValue = firstValue / 100;
    const tipValue = secondValue / npeople;

    const totalBill = nbill + tipValue;
    const billValue = totalBill / people;

    props.onAddTotal(billValue);
    props.onAddTip(tipValue);
  }, [bill, tip, people]);

  return (
    <div className={style.calculator}>
      <label htmlFor="bill" className={style.formItem}>
        <div className={style.formLabel}>Bill</div>
        <div className={style.formInput}>
          <span><img src="./icon-dollar.svg" alt="Dollar" /></span>
          <input id="bill" name="bill" placeholder="0.00" onChange={changeBill} value={bill} />
          <div>{bill}</div>
        </div>
      </label>

      <div htmlFor="bill" className={style.formItem}>
        <div className={style.formLabel}>Select Tip %</div>

        <div className={style.percents}>
          { percents.map((e) => (
            <button type="button" className={tip === e ? style.active : ''} onClick={() => setTip(e)} key={e}>
              {e}
              %
            </button>
          )) }
          <input id="custom" name="custom" placeholder="Custom" onChange={(ev) => setTip(ev.target.value)} value={tip} />

          <div>{tip}</div>
        </div>
      </div>

      <label htmlFor="people" className={style.formItem}>
        <div className={style.formLabel}>Number of People</div>
        <div className={style.formInput}>
          <span><img src="./icon-person.svg" alt="Dollar" /></span>

          <input id="people" name="people" placeholder="0.00" onChange={(ev) => setPeople(ev.target.value)} value={people} />
          <div>{people}</div>
        </div>
      </label>
    </div>
  );
};
