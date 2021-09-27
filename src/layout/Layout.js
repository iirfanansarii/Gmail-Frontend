import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Header, Sidebar, SideIcons, TopWrapper } from '../components';

const useStyles = makeStyles({
  layoutBody: {
    marginLeft: ' 18%',
    width: '79%',
    position: 'fixed',
    minHeight: '100vh',
    height: 'auto',
    top: '70px',
    display: 'flex',
    marginTop: '2px',
    borderRight: '1px solid lightgray',
  },
  children: {
    width: '100% ',
    borderRight: '1px solid lightgray',
  },
  sideicons: {
    width: '3%',
    position: 'fixed',
    height: 'auto',
    minHeight: '50%',
    right: '0px',
  },
  topWrapper: {
    borderBottom: '1px solid lightgray',
    borderRight: '1px solid lightgray',
  },
});

const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <Grid container className={classes.layoutBody}>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={9.5}>
          <Grid
            item
            xs={8}
            sm={8}
            md={8}
            lg={8}
            xl={12}
            className={classes.topWrapper}
          >
            <TopWrapper />
          </Grid>
          <Grid item className={classes.children}>
            {props.children}
          </Grid>
        </Grid>
        <Grid className={classes.sideicons} xs={2} sm={2} md={2} lg={2} xl={4}>
          <SideIcons />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
