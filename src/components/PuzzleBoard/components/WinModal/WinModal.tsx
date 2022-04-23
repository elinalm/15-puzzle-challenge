import React, { useState } from 'react';
import { Typography, Button, Modal, Box } from '@mui/material';

import { useControls } from '../../../../context/ControlContext';
import { PLAY_AGAIN, WIN } from '../../../../utils';
import useStyles from './styles';
import { useMediaQuery, useTheme } from '@material-ui/core';

export const WinModal = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { shuffle, win } = useControls();
  const [open, setOpen] = useState(win);
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const modalWidth = matches ? 250 : 400;

  const handleClose = () => {
    setOpen(false);
    shuffle();
  };

  return (
    <Box>
      <Modal open={open}>
        <Box width={modalWidth} height={200} className={classes.container}>
          <Typography variant="h6">{WIN}</Typography>
          <Button
            color="info"
            variant="contained"
            className={classes.button}
            onClick={handleClose}
          >
            {PLAY_AGAIN}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
