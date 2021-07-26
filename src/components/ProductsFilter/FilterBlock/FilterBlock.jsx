/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckBox from './CheckBoxBlock';
import styles from './FilterBlock.module.scss';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '0px',
    margin: '0px',
  },
  acordion: {
    boxShadow: '0px 0px 0px 0px #fff',
    margin: '0px',
  },
  accordionSummary: {
    padding: '0px 15px 0px 0px',
    marginBottom: '0px',
    height: '40px',
  },
  accordionDetails: {
    padding: '0px',
    marginLeft: '-10px',
    width: '100%',
  },
}));

const FilterBlock = ({ title, handleChange, checkState }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion className={classes.acordion} defaultExpanded>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className={styles.Title}>{title}</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="span" className={classes.accordionDetails}>
            <CheckBox handleChange={handleChange} checkState={checkState} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default FilterBlock;
