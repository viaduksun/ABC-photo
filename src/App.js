import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header3';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Products from './pages/Products';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 90px',
  },
  container: {
    flexGrow: 1,
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="wrapper">
      <Header />
      <Container className={classes.container} maxWidth="sm" mt={20}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
