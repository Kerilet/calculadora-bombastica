/* eslint-disable radix */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import style from './style.module.css';

export default ({ reseted, onAddTotal, onAddTip }) => {
  const percents = ['5', '10', '15', '25', '50'];

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');
  const [focused, setFocused] = useState(false);

  const focusCustom = () => setFocused(true);
  const clickTip = (e) => {
    setTip(e);
    setFocused(false);
  };

  const changeBill = (ev) => {
    ev.preventDefault();
    const { value } = ev.target;
    const indexPoint = value.indexOf('.');
    const fixed = value.substr(0, indexPoint >= 0 ? indexPoint + 3 : 7);
    setBill(fixed);
  };

  const changePeople = (ev) => {
    ev.preventDefault();
    const { value } = ev.target;
    // eslint-disable-next-line no-restricted-globals
    setPeople(value.replace(/\./g, ''));
  };

  useEffect(() => {
    const nbill = Number.parseFloat(bill);
    const npeople = Number.parseFloat(people);
    const ntip = Number.parseFloat(tip);

    const firstValue = nbill * ntip;
    const secondValue = firstValue / 100;
    const tipValue = secondValue / npeople;

    const totalBill = nbill + ntip;
    const billValue = totalBill / people;

    onAddTotal(billValue);
    onAddTip(tipValue);
  }, [bill, tip, people]);

  useEffect(() => {
    setBill('');
    setTip('');
    setPeople('');
  }, [reseted]);

  return (
    <div className={style.calculator}>
      <label htmlFor="bill" className={style.formItem}>
        <div className={style.formLabel}>Bill</div>
        <div className={style.formInput}>
          <span><img src="./icon-dollar.svg" alt="Dollar" /></span>
          <input data-testid="inputBill" type="number" step=".01" autoComplete="off" maxLength="9" id="bill" name="bill" placeholder="0" onChange={changeBill} value={bill} />
        </div>
      </label>

      <div htmlFor="bill" className={style.formItem}>
        <div className={style.formLabel}>Select Tip %</div>

        <div className={style.percents}>
          { percents.map((e) => (
            <button type="button" className={tip === e && !focused ? style.active : ''} onClick={() => clickTip(e)} key={e}>
              {e}
              %
            </button>
          )) }
          {/* {focused.toString()} */}
          <input id="custom" type="number" data-testid="percentageInput" step=".01" autoComplete="off" maxLength="2" name="custom" placeholder="Custom" value={focused ? tip : ''} onFocus={focusCustom} onChange={(ev) => setTip(ev.target.value)} />
        </div>
      </div>

      <label htmlFor="people" className={style.formItem}>
        <div className={style.formLabel}>Number of People</div>
        <div className={style.formInput}>
          <span><img src="./icon-person.svg" alt="Dollar" /></span>

          <input type="number" data-testid="inputPeople" step=".01" autoComplete="off" id="people" name="people" placeholder="0" onChange={changePeople} value={people} />
        </div>
      </label>
    </div>
  );
};
