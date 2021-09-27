import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },
  headText: {
    fontSize: '20px',
  },
  userDetails: {
    display: 'flex',
    marginTop: '20px',
  },
  message: {
    display: 'flex',
    justifyItems: 'center',
    justifyContent: 'center',
  },
  userDatetime: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const SingleMailComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid
          item
          className={classes.headText}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Typography>
            Hello bro how are you man Hello bro how are you man Hello bro how
            Hello bro how are you man Hello bro how are you man are you man
            Hello bro how are you man Hello bro how are you man Hello bro how
            Hello bro how are you man Hello bro how are you man are you man
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.userDetails}
        >
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.userDatetime}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography>Irfan Ansari</Typography>
              <Typography>abc@gmail.com</Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <Typography>10/02/2021, 7:30 PM , Sunday</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.message}
        >
          <Typography>
            here are you mail message here are you mail message here are you
            mail message here are you mail message here are you mail message
            here are you mail message here are you mail message here are you
            mail message here are you mail message here are you mail message
            here are you mail message here are you mail message here are you
            mail message here are you mail message here are you mail message
            here are you mail message
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleMailComponent;
