import React, { memo, useCallback, ChangeEvent, useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { convertBase64 } from './helpers/convertBase64';

type ImageProps = unknown;

export const Image: React.FC<ImageProps> = memo(() => {
  const [image, setImage] = useState('');
  const onChange = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files) {
      const file = event?.target?.files[0];
      const base64 = await convertBase64(file);
      setImage(base64);
    }
  }, []);

  return (
    <>
      {image ? (
          <img src={image} alt={'dropzoneImage'} loading="lazy" />
      ) : (
        <Button variant="outlined" component="label" startIcon={<AddIcon />}>
          image
          <input type="file" onChange={onChange} accept="image/*" hidden />
        </Button>
      )}
    </>
  );
});
