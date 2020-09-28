import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    '& .MuiButton-label':{
      color:'#fff'
    },
    '& .MuiGrid-container':{
      alignItems: 'center',
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(8),
    
  },
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#008F4C'
  },
  cardContent: {
    flexGrow: 1,
  },
  root2: {
    flexGrow: 1,
    display: 'flex',
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(5),
  },
  paper2: {
    height: 70,
    width: 270,
    borderRadius: 15,
    textAlign: 'center',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const cards = [
  { button: 'Data Pekerja', url: '/pendaftaranulangpekerja' },
  // { button: 'Perubahan Data Pekerja', url: '/inputperubahandatapekerja' },
  // { button: 'Pendaftaran Ulang Pekerja', url: '/pendaftaranulangpekerja' },
  // { button: 'Billing Info', url: ''},
  // { button: 'Pengakhiran Kepesertaan', url:''},
  // { button: 'Pengajuan Klaim Pengembalian Tabungan', url:'' }
]

export default function CardList() {
  const classes = useStyles();


  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };


  return (
    // <div className={classes.root}>
    // <Container className={classes.cardGrid} >
    //   <Grid style={{alignItems:'center'}} spacing={0}>
    //     {cards.map((card, index) => (
    //       <Grid key={index} xs={10} sm={8} md={6}>
    //         <Card  className={classes.card}>
    //           <CardContent className={classes.cardContent} style={{textAlign:'center', alignItems:'center'}}>
    //             <Button href={card.url}>{card.button}</Button>
    //           </CardContent>
    //         </Card>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Container>
    // </div>

    <div className={classes.paper}>
      <Grid 
        direction="column"
        item
        spacing={3} 
        xs={10} sm={8} md={6} 
        justify="space-between"
        >
          <Grid container className={classes.root2} >
      {/* <Grid item > */}
        <Grid container justify="center" spacing={7}>
            <Grid item spacing={4}>
            <Button
            id="btnDataPekerja"
            fullWidth
            variant="contained"
            color="primary"
            href= "/datapeserta"
            className={classes.paper2}
            >
            Data Peserta
          </Button>
          </Grid>
          <Grid item spacing={4}>
          <Button
            id="btnDataPekerja"
            fullWidth
            variant="contained"
            color="primary"
            disabled
            className={classes.paper2}
            >
            Billing Info
          </Button>
          </Grid>
        </Grid>
      {/* </Grid> */}
    </Grid>
    <Grid container className={classes.root2} >
      {/* <Grid item > */}
        <Grid container justify="center" spacing={7}>
            <Grid item spacing={4}>
            <Button
            id="btnDataPekerja"
            fullWidth
            variant="contained"
            color="primary"
            disabled
            className={classes.paper2}
            >
            Pengakhiran Kepesertaan
          </Button>
          </Grid>
          <Grid item spacing={4}>
          <Button
            id="btnDataPekerja"
            fullWidth
            variant="contained"
            color="primary"
            disabled
            className={classes.paper2}
            >
            Pengajuan Klaim Pengembalian Tabungan
          </Button>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </Grid>
        {/* <Grid className="btnDataPekerja">
          <Button
            id="btnDataPekerja"
            fullWidth
            variant="contained"
            color="primary"
            href= "/datapeserta"
            className={classes.btnDataPekerja}
            >
            Data Peserta
          </Button>
        </Grid>
        <Grid className="btnDataPekerja">
          <Button
            id="btnDataPekerja"
            fullWidth
            variant="contained"
            color="primary"
            disabled
            className={classes.btnDataPekerja}
            >
            Billing Info
          </Button>
        </Grid>
        <Grid className="btnDataPekerja">
          <Button
            id="btnDataPekerja"
            fullWidth
            variant="contained"
            color="primary"
            disabled
            className={classes.btnDataPekerja}
            >
            Pengakhiran Kepesertaan
          </Button>
        </Grid>
        <Grid className="btnDataPekerja">
          <Button
            id="btnDataPekerja"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btnDataPekerja}
            disabled
            >
            Pengajuan Klaim Pengembalian Tabungan
          </Button>
        </Grid> */}
        </Grid>
    </div>
    
          
  );
}