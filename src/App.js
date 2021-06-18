import './App.css';
import Header from './components/Header';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import {
  Container
} from '@material-ui/core';

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <h1>React Online Store Fe 24</h1>
        <CloudinaryContext cloudName="demo">
          <div>
            <Image publicId="sample" width="50" />
          </div>
          <Image publicId="sample" width="0.5" />
        </CloudinaryContext>
      </Container>
    </>

  );
};

export default App;
