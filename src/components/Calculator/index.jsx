import React from 'react';
import style from './style.module.css';

export default () => {
  const percents = ['5%', '10%', '15%', '25%', '50%', '70%'];
  return (
    <div className={style.calculator}>
      <label htmlFor="bill" className={style.formItem}>
        <div className={style.formLabel}>Bill</div>
        <div className={style.formInput}>
          <span><img src="./icon-dollar.svg" alt="Dollar" /></span>
          <input id="bill" name="bill" placeholder="0.00" />
        </div>
      </label>

      <div htmlFor="bill" className={style.formItem}>
        <div className={style.formLabel}>Select Tip %</div>

        <div className={style.percents}>
          { percents.map((e) => <div key={e}>{e}</div>) }
        </div>
      </div>

      <label htmlFor="people" className={style.formItem}>
        <div className={style.formLabel}>Number of People</div>
        <div className={style.formInput}>
          <span><img src="./icon-person.svg" alt="Dollar" /></span>

          <input id="people" name="people" placeholder="0.00" />
        </div>
      </label>
    </div>
  );
};
