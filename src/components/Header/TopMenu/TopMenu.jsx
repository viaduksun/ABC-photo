import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import menuItems from '../../../Data/menuItems';
import styles from './TopMenu.module.scss';

<<<<<<< HEAD
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
                key={menuItem.id}
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
=======
const TopMenue = () => (
  <div className={styles.topContainer}>
    <div className="container">
      <div className={styles.topMenuWrapper}>
        <div className={styles.topMenu}>
          {menuItems.map((menuItem) => (
            <NavLink
              exact
              to={menuItem.pageURL}
              className={styles.link}
              activeClassName="selected"
              key={menuItem.id}
            >
              {menuItem.menuTitle}
            </NavLink>
          ))}
        </div>
        <LanguageSelector />
      </div>
    </div>
  </div>
);
>>>>>>> 6c19801200032bc66af4012872bdcd5ba9afbf1a

export default withRouter(TopMenue);
