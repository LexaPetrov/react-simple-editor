import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { VisualEditor } from 'features';

type EditorPageProps = unknown;

const EditorPage: React.FC<EditorPageProps> = memo(() => {
  return (
    <>
      <Typography variant="h2">Simple Editor</Typography>
      <VisualEditor />
    </>
  );
});

export default EditorPage;
