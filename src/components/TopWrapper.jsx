import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  wrapperMain: {
    width: '100%',
    padding: '10px 10px 10px 27px',
  },
}));

const TopWrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.wrapperMain}>
        <CheckBoxIcon />
        <RefreshIcon />
        <MoreVertIcon />
      </Grid>
    </div>
  );
};

export default TopWrapper;
