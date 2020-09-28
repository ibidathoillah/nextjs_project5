import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //padding: theme.spacing(2, 0),
    padding: theme.spacing(8, 0, 8),
    background: '#008F4C',
    color: '#fff'

  },

  buttons: {
    marginTop: theme.spacing(2),
    '& .MuiButton-outlined':{
      width:'200px',
      borderRadius:'15px',
  }
  },
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" component="main" className={classes.root}>
      <Container maxWidth="sm">
        <Typography component="h4" variant="h3" align="center" color="inherit" gutterBottom>
          BP TAPERA  
        </Typography>
        <Typography variant="h6" align="center" color="inherit" component="p">
          Badan Pengelola Tabungan Perumahan Rakyat (BP TAPERA) didirikan berdasarkan Undang-Undang Nomor 4 Tahun 2016 tentang Tabungan Perumahan Rakyat
        </Typography>
        <Container className={classes.buttons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="outlined" color="inherit" size="medium">
                iOS
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="inherit" size="medium">
                ANDROID
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Container>
  );
}
