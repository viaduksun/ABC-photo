import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckBox from './CheckBox/CheckBox';
import styles from './Matrix.module.scss';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '0px'
  },
  acordion: {
    boxShadow: '0px 0px 0px 0px #fff',
  },
  accordionSummary: {
    padding: '0px 15px 0px 0px',
    marginBottom: '0px',
    height: '50px'
  },
  accordionDetails: {
    padding: '0px',
    width: '70%'
  }
}));

const Equipment = () => {
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
          <h3 className={styles.Title}>Матрица</h3>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography component="span">
            <CheckBox />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Equipment;
