import React from 'react';
import Breadcrumbs from '../../containers/Breadcrumbs/Breadcrumbs';
import styles from './Guaranty.module.scss';

const Guaranty = () => {
  const array = [['/', 'Главная'], ['guaranty', 'Гарантии']];
  return (
    <div className={styles.GuarantytWrapper}>
      <div className="container">
        <Breadcrumbs data={array} />
        <h2>Гарантии</h2>
        <p>
          Гарантийным обслуживанием является бесплатное устранение недостатков продукции,
          возникших по вине изготовителя, при условии соблюдения правил эксплуатации,
          устанавливаемых изготовителем.
        </p>
        <p>
          Срок гарантийного обслуживания колеблется от 1 года до 10 лет в зависимости от
          вида техники и конкретного производителя.
        </p>
        <p>
          Срок гарантии на продукцию компаний Canon, Olympus,
          Pentax, Sony,  Panasonic, Fuji – 2года
        </p>
        <p>
          Срок гарантии на объективы Tamron - 2 года
          (после регистрации  продукта на сайте www.5years.tamron.eu--гарантия подляется до 5 лет)
        </p>
        <p>
          Срок гарантии на продукцию компании Nikon - 1год + 1год бесплатного
          сервисного обслуживания.
        </p>
        <p>На все остальные товары гарантия составляет 1 год.</p>
      </div>
    </div>
  );
};

export default Guaranty;