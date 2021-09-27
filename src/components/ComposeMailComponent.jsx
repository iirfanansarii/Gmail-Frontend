import React from 'react';
import {
  Button,
  Grid,
  IconButton,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '40%',
    padding: '10px',
    border: '1px solid #404040',
    position: 'fixed',
    bottom: '1%',
    right: '1%',
  },
  postContent: {
    background: 'white',
    outline: 'none',
    resize: 'none',
    border: 'none',
    width: '99.7%',
    color: '#393939',
    fontWeight: '200',
    fontSize: '20px',
    fontFamily: 'monospace',
    textOutline: 'none',
    minHeight: '20px',
  },
  textField: {
    padding: '5px',
    width: '100%',
    margin: '5px',
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: '15px',
    fontWeight: '800',
    '& .MuiFilledInput-input': {
      fontFamily: 'exo',
      fontSize: '20px',
      fontWeight: '600',
      color: 'gray',
      // background: '#E8F0FE'
    },
    '& .MuiFilledInput-root': {
      borderRadius: '0px',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottom: '2px solid #393939',
    },
    '& .MuiFormHelperText-filled': {
      fontFamily: 'exo',
      fontSize: '15px',
      color: 'gray',
      fontWeight: '1000',
    },
    '& .MuiFormLabel-root.Mui-error': {
      fontFamily: 'exo',
      fontSize: '15px',
      color: '#393939',
      fontWeight: '1000',
    },
    '& .MuiFormHelperText-root.Mui-error': {
      fontFamily: 'exo',
      fontSize: '15px',
      color: '#393939',
      fontWeight: '1000',
    },
  },
  composeIcons: {
    display: 'flex',
    fontSize: '10px',
    '& .MuiSvgIcon-root': {
      fontSize: '15px',
    },
  },
  iconscontainer: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#404040',
    color: 'white',
  },
  btnName: {
    fontFamily: 'exo',
    fontSize: '20px',
    fontWeight: '600',
    textTransform: 'none',
    border: '2px solid black',
    borderRadius: '50px',
    height: '44px',
    '& .MuiButton-label': {
      width: '100px',
      color: '#393939',
    },
  },
}));

const ComposeMailComponent = () => {
  
  const classes = useStyles();
  return (
    <div classNam={classes.root}>
      <Grid contaniner className={classes.container}>
        <Grid
          xs={12}
          sm={120}
          md={12}
          lg={12}
          xl={12}
          className={classes.iconscontainer}
        >
          <Typography>New Message</Typography>
          <Grid className={classes.composeIcons}>
            <IconButton>
              <RemoveIcon />
            </IconButton>
            <IconButton>
              <OpenInFullIcon />
            </IconButton>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid xs={12} sm={120} md={12} lg={12} xl={12}>
          <span>To</span>
          <TextField
            id="standard-helperText"
            variant="standard"
            className={classes.textField}
          />
        </Grid>
        <Grid
          xs={12}
          sm={120}
          md={12}
          lg={12}
          xl={12}
          className={classes.textContainer}
        >
          <span>Subject</span>
          <TextField
            id="standard-helperText"
            variant="standard"
            className={classes.textField}
          />
        </Grid>
        <Grid xs={12} sm={120} md={12} lg={12} xl={12}>
          <TextareaAutosize
            minRows={1}
            maxRows={100}
            aria-label="maximum height"
            placeholder="write your mail  here..."
            className={classes.postContent}
          />
        </Grid>
        <Grid xs={12} sm={120} md={12} lg={12} xl={12}>
          <Button className={classes.btnName}>Send</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ComposeMailComponent;
