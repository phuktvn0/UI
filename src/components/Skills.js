import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Skills({data}) {
  return (
    <Stack sx={{ marginTop: '15px'}} spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        {data.skills.slice(0,4).map((skill) =>
        <Chip label={skill} color="success" />
        )}
      </Stack>
    </Stack>
  );
}