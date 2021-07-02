import React from 'react';
import styles from './Select.module.scss';

const Select = () => (
  <div>
    <select className={styles.Select}>
      <option selected value="grapefruit">г.Киев, ул. Б. Васильковская (Красноармейская), 132...</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>
  </div>

    );

export default Select;