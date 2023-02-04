import React, { memo } from 'react';
import { Grid, Box, TextareaAutosize } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import TextIcon from '@mui/icons-material/AbcRounded';
import { EditorAside, EditorDropzone, Image } from 'widgets';
import type { EditorItem } from 'widgets/editor/entities/types';

type VisualEditorProps = unknown;

const FIELDS: EditorItem[] = [
  {
    id: '1',
    component: (
      <TextareaAutosize
        minRows={3}
        style={{ width: '100%', padding: '5px', background: 'transparent' }}
        color="primary"
      />
    ),
    label: 'Text',
    icon: <TextIcon />,
  },
  {
    id: '2',
    component: (
      <Box sx={{ maxWidth: 300 }}>
        <Image />
      </Box>
    ),
    label: 'Image',
    icon: <ImageIcon />,
  },
];

export const VisualEditor: React.FC<VisualEditorProps> = memo(() => {
  return (
    <Grid container maxWidth={'lg'} sx={{ my: 2 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
      <Grid item xs={12} sm={3}>
        <EditorAside fields={FIELDS} />
      </Grid>
      <Grid item xs={12} sm={9}>
        <EditorDropzone />
      </Grid>
    </Grid>
  );
});
