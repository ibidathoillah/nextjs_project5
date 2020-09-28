import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SlideEventnews from '../components/slide_eventnews';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: '100%',
    height: 200,
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(2),
  },
  
}));

export default function Content() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SlideEventnews></SlideEventnews>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '60vh' }} />
      </Container>
    </React.Fragment>
  );
}
