/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import styles from './WaysOfPayment.module.scss';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
    paddingLeft: 0,
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const WaysOfPayment = () => {
  const [selectedValuePaymant, setSelectedValuePaymant] = React.useState('e');

  const handleChangePaymant = (event) => {
    setSelectedValuePaymant(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <div className={styles.WaysOfPayment}>
      <h2>Способы оплаты</h2>
      <form className={styles.WaysOfPaymentForm} onSubmit={handleFormSubmit}>
        <div className={styles.WaysOfPaymentFormLeft}>
          <div>
            <GreenRadio
              checked={selectedValuePaymant === 'd'}
              onChange={handleChangePaymant}
              value="d"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'D' }}
              id="cash"
            />
            <label htmlFor="cash">Наличными при получении</label>
          </div>
          <div>
            <GreenRadio
              checked={selectedValuePaymant === 'e'}
              onChange={handleChangePaymant}
              value="e"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'E' }}
              id="card"
            />
            <label htmlFor="card">Картой при получении</label>
          </div>
          <div>
            <GreenRadio
              checked={selectedValuePaymant === 'f'}
              onChange={handleChangePaymant}
              value="f"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'F' }}
              id="cashless"
            />
            <label htmlFor="cashless">Безналичный расчет</label>
          </div>
        </div>
        <div className={styles.WaysOfPaymentFormRight}>
          <div>
            <GreenRadio
              checked={selectedValuePaymant === 'g'}
              onChange={handleChangePaymant}
              value="g"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'G' }}
              id="alfa"
            />
            <label htmlFor="alfa">Кредит Альфа Банк</label>
          </div>
          <div>
            <GreenRadio
              checked={selectedValuePaymant === 'h'}
              onChange={handleChangePaymant}
              value="h"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'H' }}
              id="credit"
            />
            <label htmlFor="credit">Кредит Credit Agricole</label>
          </div>
          <div>
            <GreenRadio
              checked={selectedValuePaymant === 'i'}
              onChange={handleChangePaymant}
              value="i"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'I' }}
              id="UKRSIBBANK"
            />
            <label htmlFor="UKRSIBBANK">Кредит УКРСИББАНК</label>
          </div>
        </div>
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default WaysOfPayment;
