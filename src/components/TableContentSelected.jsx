import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material';

export const TableContentSelected = ({
  charactersSelected,
  removeCharacterSelected,
}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar>
          <Typography variant='h6' id='tableTitle' component='div'>
            Characters Selected
          </Typography>
        </Toolbar>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-labelledby='tableTitle'>
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Stories #</TableCell>
                <TableCell>Series #</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {charactersSelected &&
                charactersSelected.map((charSelected) => {
                  const { id, name, stories, series } = charSelected;
                  return (
                    <TableRow key={id}>
                      <TableCell>
                        <Button
                          onClick={() => removeCharacterSelected(charSelected)}
                        >
                          X
                        </Button>
                      </TableCell>
                      <TableCell>{name}</TableCell>
                      <TableCell>{stories}</TableCell>
                      <TableCell>{series}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};
