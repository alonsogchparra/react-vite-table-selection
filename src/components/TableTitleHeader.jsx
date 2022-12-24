import { Box, TableCell, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import React from 'react';

export const TableTitleHeader = ({
  id,
  orderBy,
  order,
  label,
  handleRequestSort,
}) => {
  return (
    <TableCell sortDirection={orderBy === id ? order : 'asc'}>
      <TableSortLabel
        active={orderBy === id}
        direction={orderBy === id ? order : 'asc'}
        onClick={(e) => handleRequestSort(e, id)}
      >
        {label}
        {orderBy === id ? (
          <Box component='span' sx={visuallyHidden}>
            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </Box>
        ) : null}
      </TableSortLabel>
    </TableCell>
  );
};
