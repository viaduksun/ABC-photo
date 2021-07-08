/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const validateRegister = Yup.object().shape({
  firstName: Yup.string()
    .max(10, 'Must be 10 characters or less')
    .required('First name is required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Last name is required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  login: Yup.string()
    .max(10, 'Must be 10 characters or less')
    .required('First name is required'),
  age: Yup.number()
    .max(99, 'Must be 2 characters or less')
    .required('Age is required'),
  address: Yup.string()
    .max(40, 'Must be 40 characters or less')
    .required('Address is required'),
  phone: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Phone is required'),
});