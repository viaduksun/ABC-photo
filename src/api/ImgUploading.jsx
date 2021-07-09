import React, { useState } from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';
import { Container, Box, Button } from '@material-ui/core';
import uploadImg from './uploadImg';

const ImgUploading_example = () => {
  const [imageSelected, setImageSelected] = useState('');
  const handleUploadImg = () => {
    uploadImg(imageSelected);
  };
  return (
    <Container>
      <CloudinaryContext cloudName="demo">
        <div mt={8}>
          <Image
            cloudName="finalprojectfe242021"
            publicId="https://res.cloudinary.com/finalprojectfe242021/image/upload/v1624004349/OnlineStore/fqrxkleqzvco5f8ubdnw.jpg"
            width="260"
          />
        </div>
      </CloudinaryContext>
      <input
        type="file"
        onChange={(e) => {
          setImageSelected(e.target.files[0]);
        }}
      />
      <Box mr={3}>
        <Button
          mr={3}
          variant="contained"
          color="default"
          onClick={handleUploadImg}
        >
          apload
        </Button>
      </Box>
    </Container>
  );
};

export default ImgUploading_example;
