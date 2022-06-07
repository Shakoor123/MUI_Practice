import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { AddCircle } from '@mui/icons-material';

export default function FallbackAvatars() {
  return (
    <Stack sx={{ bgcolor: 'cyan', height: 50, display: 'flex', alignItems: 'center', paddingLeft: 10 }} direction="row" spacing={2}>
      <Avatar

        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        B
      </Avatar>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      />
      <Avatar src="/broken-image.jpg" />
      <AddCircle />
    </Stack>
  );
}
