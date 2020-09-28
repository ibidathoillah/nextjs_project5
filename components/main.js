import React from 'react';
import Banner from './banner';
import PendaftaranPeserta from './pendaftaranPeserta';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 300,
  },
  con: {
    direction: 'column',
    justify: 'center',
    alignItems: 'stretch',
  }
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div>
    <Banner></Banner>
    {/* <Grid className={classes.con} item xs={4} sm={4} md={4}>
    <img className="card-img" src="assets/img/people.png" alt="" />
    </Grid> */}
    <PendaftaranPeserta/>
    </div>
  )

}
