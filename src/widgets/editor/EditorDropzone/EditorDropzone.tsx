import React, { memo, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Box, ListItem, Paper } from '@mui/material';
import { EditorItem } from '../entities/types';

const SORTABLE_GROUP = {
  name: 'editor',
  put: ['variants'],
};

type EditorDropzoneProps = unknown;

const style = {
  width: '100%',
  minHeight: '150px',
  maxHeight: '700px',
  overflow: 'auto',
  background: 'transparent',
};

export const EditorDropzone: React.FC<EditorDropzoneProps> = memo(() => {
  const [list, setList] = useState<EditorItem[]>([]);

  return (
    <Box>
      <Paper>
        <ReactSortable
          group={SORTABLE_GROUP}
          style={style}
          list={list}
          setList={setList}
          clone={(item) => ({ ...item, id: new Date().getTime().toString() })}
        >
          {list.map(({ component, id }) => (
            <ListItem key={'list-' + id}>{component}</ListItem>
          ))}
        </ReactSortable>
      </Paper>
    </Box>
  );
});
