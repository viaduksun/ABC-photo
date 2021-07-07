/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import createProduct from '../api/createProduct';
import userRegister from '../api/register';
import Login from '../api/login';

const ApiTest = () => {
  const [values, setValues] = useState({
    email: '',
    Password: '',
    confirmPassword: '',
  });
  const productObj = {
    name: 'Фотоаппарат CANON EOS M50 EF-M 15-45mm f/3.5-6.3 IS STM',
    currentPrice: 199.99,
    previousPrice: 250,
    quantity: 100,
    artical: 1237773,
    hitSale: true,
    categories: 'cameras',
    waranty: 24,
    type: 'Суперзум',
    megapixels: '24.1',
    matrixType: 'CMOS (КМОП)',
    matrixSize: 'APS-C (22.3 х 14.9 мм)',
    screenDiagonal: 3,
    sensorScreen: true,
    digitalMagnification: '4x',
    stabilization: true,
    opticalMagnification: '50x',
    focusDistance: 'APS-C (22.3 х 14.9 мм)',
    imageUrls: [
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625583314/OnlineStore/Cameras/CANON%20EOS%20M50%20EF-M/02_dcfvib.jpg',
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625583314/OnlineStore/Cameras/CANON%20EOS%20M50%20EF-M/04_wo7dij.jpg',
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625583314/OnlineStore/Cameras/CANON%20EOS%20M50%20EF-M/03_snk43l.jpg',
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625583314/OnlineStore/Cameras/CANON%20EOS%20M50%20EF-M/01_jcwqkb.jpg',
      
    ],
   
  };
  const productObj2 = {
    name: 'Фотоаппарат CANON EOS M60 EF-M 15-45mm f/3.5-6.3 IS STM',
    currentPrice: 199.99,
    previousPrice: 250,
    megapixels: '24.1',
    matrixType: 'CMOS (КМОП)',
    matrixSize: 'APS-C (22.3 х 14.9 мм)',
    focusDistance: 'APS-C (22.3 х 14.9 мм)',
    imageUrls: [
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625588091/OnlineStore/Cameras/CANONPowerShotSX530HS/02_rxqjgm.jpg',
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625588091/OnlineStore/Cameras/CANONPowerShotSX530HS/04_gt9fnp.jpg',
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625588091/OnlineStore/Cameras/CANONPowerShotSX530HS/03_zzvy8y.jpg',
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625588091/OnlineStore/Cameras/CANONPowerShotSX530HS/01_zqabfw.jpg'
    ],
    quantity: 100,
    artical: 1237773,
    categories: 'cameras',
  };
  
  const handleRegister = () => {
    console.log('Register');
    userRegister();
  };
  const handleLogin = () => {
    console.log('Login');
    Login();
  };
  const handleCreateProduct = (product) => {
    console.log('Create');
    createProduct(product);
  };
  const handleChange = (event) => {
    const { name } = event.target;
    setValues((values) => ({ ...values, [name]: event.target.value }));
  };
  return (
    <div className="container">
      <h1>Api test</h1>
      <div className="apiBlock">
        <h2>Register form</h2>
        <form>
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              onChange={handleChange}
              value={values.email}
              id="email"
              type="text"
            />
          </div>

          <input type="text" name="name" />
        </form>
        <button
          type="button"
          className="btn"
          onClick={handleRegister}
        >
          Register
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <div className="apiBlock">
        <form>
          <input type="text" name="name" />
        </form>
        <button
          type="button"
          className="btn"
          onClick={() => handleCreateProduct(productObj2)}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default ApiTest;
