/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProductsAction } from '../../../../store/products/actions';
import TypeQueryMaker from '../TypeQueryMaker';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CheckBox = () => {
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const [checkedSet, setCheckedSet] = useState({
    checkedA: false,
    checkedD: false,
    // checkedB: false,
    // checkedC: false,
  });
  const [qurrentQuery, setQurrentQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCheckedSet({ ...checkedSet, [event.target.name]: event.target.checked });
    // console.log(event.target.name);
    const queryA = '&characteristics.type[1]=Зеркальный';
    const queryD = '&characteristics.type[1]=Суперзум';
    // if (event.target.name === 'checkedA' && state.checkedA) {
    //   setQurrentQuery(qurrentQuery + queryA);
    // }

    const queryArr = Object.keys(checkedSet).map((item, i) => {
      console.log(item);
      if (item === 'checkedA' && checkedSet[item]) {
        return 'Query-A';
      }
      if (item === 'checkedD' && checkedSet[item]) {
        return 'Query-B';
      }
      return null;
    });
    console.log(queryArr);

    const addQuery = queryA;
    dispatch(getFilteredProductsAction(currentCategory, page, addQuery));
  };

  return (
    <>
      <TypeQueryMaker queryState={checkedSet} />
      <FormGroup row>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkedSet.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label="зеркальные"
        />
        {/* <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkedSet.checkedB}
              onChange={handleChange}
              name="checkedB"
            />
          }
          label="компактные"
        /> */}
        {/* <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkedSet.checkedC}
              onChange={handleChange}
              name="checkedC"
            />
          }
          label="системные"
        /> */}
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkedSet.checkedD}
              onChange={handleChange}
              name="checkedD"
            />
          }
          label="суперзум"
        />
      </FormGroup>
    </>
  );
};

export default CheckBox;
