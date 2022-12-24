import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Repository = () => {
  return (
    <Box width='100%' my={4}>
      <Grid container justifyContent='center' alignItems='center'>
        <Box m={1} pb={1}>
          <Typography variant='subtitle1' textAlign='center'>
            Also feel free to check the entire code on my{' '}
            <a
              href='https://github.com/alonsogchparra/react-vite-table-selection'
              target='_blank'
              rel='noreferrer'
            >
              github page
            </a>{' '}
          </Typography>
        </Box>

        <Box m={1}>
          <GitHubIcon fontSize='large' />
        </Box>
      </Grid>
    </Box>
  );
};
