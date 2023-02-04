import React, { memo } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { ListItem, ListItemAvatar, ListItemText, Avatar, Paper, Box } from '@mui/material';
import { EditorItem } from '../entities/types';

type EditorAsideProps = {
  fields: EditorItem[];
};

export const EditorAside: React.FC<EditorAsideProps> = memo(({ fields }) => {
  return (
    <Box>
      <Paper>
        <ReactSortable
          group="variants"
          list={fields.map((item) => ({ ...item }))}
          sort={false}
          disabled={false}
          setList={() => {
            return;
          }}
        >
          {fields.map((component) => (
            <ListItem key={component.id} draggable>
              <ListItemAvatar>
                <Avatar>{component.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={component.label} />
            </ListItem>
          ))}
        </ReactSortable>
      </Paper>
    </Box>
  );
});
