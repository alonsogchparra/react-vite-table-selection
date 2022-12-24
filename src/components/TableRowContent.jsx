import { Checkbox, TableCell, TableRow } from '@mui/material';
import React from 'react';

export const TableRowContent = ({
  checked,
  character,
  name,
  stories,
  series,
  onChangeCharacterSelection,
}) => {
  return (
    <TableRow hover selected={checked} aria-checked={checked}>
      <TableCell>
        <Checkbox
          checked={checked}
          color='primary'
          onChange={({ target }) =>
            onChangeCharacterSelection(target, character)
          }
        />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{stories}</TableCell>
      <TableCell>{series}</TableCell>
    </TableRow>
  );
};
