/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styles from './Pages.module.scss';

const Credit = () => (
  <div className={styles.Credit}>
    <div className="container">
      <div className={styles.CreditWrapper}>
        <p className={styles.CreditBank}>
          <a href="#ALFA">Альфа-Банк</a>
          {' / '}
          <a href="#UKRSIBBANK">Укрсиббанк</a>
        </p>
        <h2 className={styles.CreditTitle}>Кредит</h2>
        <p className={styles.CreditBankName} id="ALFA">АЛЬФА-БАНК</p>
        <p className={styles.CreditInstallment}>Рассрочка 0% на 5 месяцев</p>
        <ul className={styles.CreditInstallmentList}>
          <li>-Возраст от 21 до 70 лет</li>
          <li>-Первоначальный взнос - отсутствует</li>
          <li>-Сумма кредита от 1 000 - 100 000 грн.</li>
          <li>-Годовая процентная ставка - 0,01%</li>
          <li>-Разовая комиссия – отсутствует 0%</li>
          <li>-Услуга страхования – отсутствует</li>
          <li>-Ежемесячная комиссия составляет - с 1 по 5 месяц - 0%; начиная с 6 месяца – 3,5%</li>
          <li>-Досрочное погашение без дополнительных комиссий</li>
          <li>-Услуга СМС информирования 50 грн за каждый месяц пользования кредитом</li>
        </ul>
        <p className={styles.CreditInstallment}>Рассрочка 0% на 10 месяцев</p>
        <ul className={styles.CreditInstallmentList}>
          <li>-Возраст от 21 до 70 лет</li>
          <li>-Первоначальный взнос - отсутствует</li>
          <li>-Сумма кредита от 1 000 - 100 000 грн.</li>
          <li>-Годовая процентная ставка - 0,01%</li>
          <li>-Разовая комиссия – отсутствует 0%</li>
          <li>-Услуга страхования – 0.5% в месяц на срок кредита</li>
          <li>-Ежемесячная комиссия составляет - с 1 по 10 месяц - 0%; начиная с 11 месяца – 3,5%</li>
          <li>-Досрочное погашение без дополнительных комиссий</li>
          <li>-Услуга СМС информирования 35 грн за каждый месяц пользования кредитом</li>
        </ul>
        <p className={styles.CreditInstallment}>Стадии оформления рассрочки</p>
        <ul className={styles.CreditInstallmentList}>
          <li>-Выбрать товар.</li>
          <li>-В «Корзине» выбрать способ оплаты – Кредит через Альфа Банк.</li>
          <li>-Дождаться звонка менеджера с подтверждением, что Ваш товар есть в наличии и зарезервирован.</li>
          <li>-Получить письмо на электронную почту со ссылкой на заполнение On-line анкеты, ОБЯЗАТЕЛЬНО!</li>
          <li>-После заполнения On-line заявки получить решение по кредиту!</li>
          <li>-На следующий рабочий день с Вами свяжется курьер Банку для подписания кредитного договора.</li>
          <li>-Работники интернет-магазина связываются с Вами и согласовывают доставку.</li>
        </ul>
        <p className={styles.CreditInstallment}>До встречи с курьером обязательно подготовить</p>
        <ul className={styles.CreditInstallmentList}>
          <li>-Оригинал и копию паспорта, кода ИНН</li>
        </ul>
        <p className={styles.CreditBankName} id="UKRSIBBANK">УКРСИББАНК</p>
        <p className={styles.CreditInstallment}>Для оформления кредита необходимо</p>
        <ul className={styles.CreditInstallmentList}>
          <li>-Возраст от 21 до 65 лет;</li>
          <li>-Паспорт гражданина Украины и идентификационный код;</li>
          <li>-Официальное/не официальное трудоустройство (документальное подтверждение не требуется);</li>
          <li>-Стаж на последнем месте работы не менее 3 месяцев, контактный городской телефон с места работы</li>
        </ul>
        <p className={styles.CreditInstallment}>Как оформить кредит</p>
        <ul className={styles.CreditInstallmentList}>
          <li>-Уточнить у менеджеров интернет-магазина наличие товара;</li>
          <li>-Зарезервировать товар;</li>
          <li>-Получить в интернет-магазине счет-фактуру;</li>
          <li>-Посетить удобное для Вас отделение УкрСиббанка из указанного списка и оформить кредит.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Credit;