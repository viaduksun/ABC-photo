import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    minHeight: 31,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  phoneItem: {
    display: 'block',
    width: '100%',
    height: 36,
  },
}));

export default function PhoneAccordion() {
  const classes = useStyles();

  return (
    <div>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>8-800-200-50-88</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography className={classes.phoneItem}>8-800-200-50-40</Typography>
          <Typography className={classes.phoneItem}>8-800-200-50-60</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
