/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Select from './Select/Select';
import styles from './Delivery.module.scss';

const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
      paddingLeft: 0
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

const Delivery = () => {
    const [selectedValueDelivery, setSelectedValueDelivery] = React.useState('a');
  
    const handleChangeDelivery = (event) => {
      setSelectedValueDelivery(event.target.value);
    };

    return (
      <div className={styles.Delivery}>
        <h2>Способы доставки</h2>
        <form className={styles.DeliveryForm}>
          <div>
            <GreenRadio
              checked={selectedValueDelivery === 'a'}
              onChange={handleChangeDelivery}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
              id="pointOfDelivery"
            />
            <label htmlFor="pointOfDelivery">Самовывоз из пункта выдачи</label>
            {selectedValueDelivery === 'a' && <Select />}
          </div>
          <div>
            <GreenRadio
              checked={selectedValueDelivery === 'b'}
              onChange={handleChangeDelivery}
              value="b"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'B' }}
              id="newMail"
            />
            <label htmlFor="newMail">Новая почта (в отделение)</label>
            {selectedValueDelivery === 'b' && <Select />}
          </div>
          <div>
            <GreenRadio
              checked={selectedValueDelivery === 'c'}
              onChange={handleChangeDelivery}
              value="c"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'C' }}
              id="courierDelivery"
            />
            <label htmlFor="courierDelivery">Курьерская доставка</label>
            {selectedValueDelivery === 'c' && <Select />}
          </div>
        </form>
      </div>
    );
};

export default Delivery;