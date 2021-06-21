import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import { Switch, Route } from 'react-router-dom';
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
    marginTop: 100,
},
});

const App = () => {
  const classes = useStyles();
  return (
    <div className="wrapper">
      <Header />
      <Container className={classes.container} maxWidth="sm" mt={16}>
        <h1>React Online Store Fe 24!</h1>
        <ImgUploading />
        <Button className={classes.root}>Exmple</Button>
      </Container>
    </>
  );
};

export default App;
