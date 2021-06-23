import React from 'react';
import { Container, Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink, withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LangSelect from '../UI/Select/LangSelect';

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: theme.spacing(4),
    color: theme.palette.grey[600],
    fontSize: '12px',
    textDecoration: 'none',
  },
  topMenu: {
    backgroundColor: theme.palette.grey[200],
    height: 35,
    display: 'flex',
    alignItems: 'center',
  },
  topContainer: {
    display: 'flex',
  },
}));
const menuItems = [
  {
    menuTitle: 'Магазины',
    pageURL: '/shops',
  },
  {
    menuTitle: 'Кредит',
    pageURL: '/credit',
  },
  {
    menuTitle: 'Доставки и оплата',
    pageURL: '/delivery',
  },
  {
    menuTitle: 'Гарантии',
    pageURL: '/guaranty',
  },
  {
    menuTitle: 'О компании',
    pageURL: '/about',
  },
  {
    menuTitle: 'Контакты',
    pageURL: '/contacts',
  },
  {
    menuTitle: 'Карта сайта',
    pageURL: '/site-map',
  },
];

const TopMenue = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  return (
    <Box className={classes.topMenu}>
      <Container className={classes.topContainer}>
        {isMobile ? (
          <h1>Burger</h1>
        ) : (
          <div>
            {menuItems.map((menuItem) => (
              <NavLink
                exact
                to={menuItem.pageURL}
                className={classes.link}
                activeClassName="selected"
              >
                {menuItem.menuTitle}
              </NavLink>
            ))}
          </div>
        )}

        <LangSelect />
      </Container>
    </Box>
  );
};

export default withRouter(TopMenue);
