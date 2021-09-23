import React from 'react';
import Button from 'react-bootstrap/Button';

export default () => (
  <div>
    <div className="resultsContainer">
      Tip Amount
      / person

      Total
      / person

      Reset
      <Button disabled={false}>Reset</Button>
    </div>
  </div>
);
