import './App.css';
import Header from './components/Header';
import AppBar from './components/AppBar';
// import Button from '@material-ui/core/Button';
import {
  Container
} from '@material-ui/core';

const App = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="sm">

        <Header />

      </Container>
    </>

  );
};

export default App;
