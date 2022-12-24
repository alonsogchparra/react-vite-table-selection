import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/fetchData';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from 'react';
import { TableCharacters } from './TableCharacters';
import { descendingComparator } from '../utils/descendingComparator';
import { TableContentSelected } from './TableContentSelected';
import { Repository } from './Repository';

export const ShowTables = () => {
  const [characters, setCharacters] = useState([]);
  const [charactersSelected, setCharactersSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');

  const { status } = useQuery(['characters'], fetchData, {
    onSuccess: (data) => {
      setCharacters(
        data.results.map((character) => ({
          id: character.id,
          name: character.name,
          stories: character.stories.available,
          series: character.series.available,
          checked: false,
        }))
      );
    },
  });

  const handleRequestSort = (e, porperty) => {
    const isAsc = orderBy === porperty && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(porperty);
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const onChangeCharacterSelection = (target, character) => {
    const { id, name, stories, series } = character;

    if (target.checked) {
      setCharactersSelected([
        ...charactersSelected,
        { id, name, stories, series, checked: target.checked },
      ]);
    } else {
      setCharactersSelected(
        charactersSelected.filter((selected) => selected.id !== character.id)
      );
    }
  };

  const checkingSelection = () => {
    if (charactersSelected.length <= 0) {
      setCharacters(
        characters.map((character) => ({ ...character, checked: false }))
      );
    } else {
      setCharacters(
        characters.map((character) => {
          if (
            charactersSelected.some(
              (charSelected) => charSelected.id === character.id
            )
          ) {
            character.checked = true;
            return character;
          } else {
            character.checked = false;
            return character;
          }
        })
      );
    }
  };

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
  };

  const removeCharacterSelected = (charSelected) => {
    setCharactersSelected(
      charactersSelected.filter(
        (charPicked) => charPicked.id !== charSelected.id
      )
    );

    setCharacters(
      characters.map((character) =>
        charSelected.id === character.id
          ? { ...character, checked: false }
          : character
      )
    );
  };

  useEffect(() => {
    checkingSelection();
  }, [charactersSelected]);

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (status === 'error') {
    return <h1>Ups! Something is wrong! Please Check!</h1>;
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <h1>Select your characters</h1>
        </Grid>
        <Grid xs={12} md={6}>
          <TableCharacters
            characters={characters}
            order={order}
            orderBy={orderBy}
            page={page}
            rowsPerPage={rowsPerPage}
            getComparator={getComparator}
            handleRequestSort={handleRequestSort}
            onChangeCharacterSelection={onChangeCharacterSelection}
            handlePageChange={handlePageChange}
            handleRowsPerPageChange={handleRowsPerPageChange}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TableContentSelected
            charactersSelected={charactersSelected}
            removeCharacterSelected={removeCharacterSelected}
          />
        </Grid>
        <Repository />
      </Grid>
    </>
  );
};
