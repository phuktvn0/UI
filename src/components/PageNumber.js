import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PageNumber({pageNumber}) {
  return (
    <Stack sx = {{ display:'flex', alignItems: 'center'}}spacing={2}>
      <Pagination count={3} variant="outlined" color="secondary" onChange={(e,pageValue)=>{pageNumber(pageValue)}}/>
    </Stack>
  );
}