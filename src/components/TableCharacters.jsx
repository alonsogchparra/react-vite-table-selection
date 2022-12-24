import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { headCells } from '../utils/headCells';
import { TableRowContent } from './TableRowContent';
import { TableTitleHeader } from './TableTitleHeader';

export const TableCharacters = ({
  characters,
  getComparator,
  handlePageChange,
  handleRequestSort,
  handleRowsPerPageChange,
  onChangeCharacterSelection,
  order,
  orderBy,
  page,
  rowsPerPage,
}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar>
          <Typography variant='h6' id='tableTitle' component='div'>
            Table Characters
          </Typography>
        </Toolbar>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} arialabelledby='tableTitle'>
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'></TableCell>
                {headCells.map(({ id, label }) => (
                  <TableTitleHeader
                    id={id}
                    label={label}
                    order={order}
                    orderBy={orderBy}
                    handleRequestSort={handleRequestSort}
                    key={id}
                  />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {characters &&
                characters
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((character) => {
                    const { id, name, stories, series, checked } = character;
                    return (
                      <TableRowContent
                        key={id}
                        checked={checked}
                        name={name}
                        stories={stories}
                        series={series}
                        character={character}
                        onChangeCharacterSelection={onChangeCharacterSelection}
                      />
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20]}
          component='div'
          count={characters?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Paper>
    </Box>
  );
};
