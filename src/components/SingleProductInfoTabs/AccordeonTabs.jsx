import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Desctiption from './Desctiption';
import Characteristics from './Characteristics';
import Accessories from './Accessories';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '8px 3px 16px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Описание</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Desctiption />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Характеристики</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Characteristics />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Аксессуары</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Accessories />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
