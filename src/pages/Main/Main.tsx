import React, { memo } from 'react';
import { Button, Typography } from '@mui/material';
import { EDITOR_PAGE_ROUTE } from 'app/router/routes';
import { useNavigate } from 'react-router-dom';

type MainPageProps = unknown;

const MainPage: React.FC<MainPageProps> = memo(() => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h2">Main page</Typography>
      <Button variant="outlined" sx={{ my: 1 }} onClick={() => navigate(EDITOR_PAGE_ROUTE)}>
        go to editor page
      </Button>
    </>
  );
});

export default MainPage;
