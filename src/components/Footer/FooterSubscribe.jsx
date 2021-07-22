// import { StylesContext } from '@material-ui/styles';
import React from 'react';
// import 'antd/dist/antd.css';
// import { Form } from 'antd';
// import PropTypes from 'prop-types';

import {FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { IoIosArrowForward} from 'react-icons/io';

// import {letterHtmlSubscribe, letterSubjectSubscribe} from '../../Utils/constants';

import styles from './Footer.module.scss';

// const FooterSubscribe = ({createNewSubscribe}) => {
const FooterSubscribe = () => (
  // const [form] = Form.useForm();
  // const onFinish = (values) => {
  //   const credentials = {
  //     ...values, letterHtml: letterHtmlSubscribe, letterSubject: letterSubjectSubscribe,
  //   };
  //   createNewSubscribe(credentials);
  //   form.resetFields();
  // };
  // return (
  <div className={styles.footerSubscribe}>
    <div className={styles.footerSubscribeTitle}>
      <h6>Подписаться на рассылку</h6>
    </div>
    <form className={styles.form}>
      {/* <form className={styles.form} onFinish={onFinish} form={form}>
        <Form.Item
          name="Email"
          roules={[
          {
            require: true,
            message: 'Email is required'
          },
          {
            type: 'Email',
            message: 'Enter data is not Email'
          },
        ]}
        > */}
      <input
        type="text"
        className={styles.input}
        placeholder="E-mail"
      />
      {/* </Form.Item> */}
      <button className={styles.button} type="submit">
        <IoIosArrowForward className={styles.selectIcon} />
      </button>
    </form>
    <div className={styles.icons}>
      <p>Мы в социальных сетях</p>
      <div className={styles.footerSubscribeIcon}>
        <a href="https://www.instagram.com/" target="blank" aria-label="Link" className={styles.contactsLink}><FaInstagramSquare size="2em" /></a>
        <a href="https://www.facebook.com/" target="blank" aria-label="Link" className={styles.contactsLink}><FaFacebookSquare size="2em" /></a>
      </div>
    
    </div>
  </div>
);
  // };
  // FooterSubscribe.propTypes = {
  //   createNewSubscribe: PropTypes.func.isRequired
  // };
export default FooterSubscribe;