import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Container, Typography, Button, Grid, Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import { Element } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiCardContent-root': {
            width: '330px',
        },
        padding: theme.spacing(8, 0, 8),
        background: '#fff',
        '& .MuiCard-root': {
            borderRadius: '30px',
            border: '5px solid #008F4C',
        },
        '& .MuiCardHeader-root': {
            fontSize: '30px'
        },
        '& .MuiButton-outlined': {

            borderRadius: '25px',
            border: 'none'
        }

        //padding: theme.spacing(2, 0),

    },
    con: {
        direction: 'column',
        justify: 'center',
        alignItems: 'stretch',
    },
    card: {
        padding: 25,
        margin: 30,
    },
    paper: {
        margin: theme.spacing(3, 2),
        // marginTop: theme.spacing(15),
        // padding: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function PendaftaranPeserta() {
    const classes = useStyles();
    return (

        <Element id="daftarSection" name="daftarSection">
            <Container component="main" className={classes.root}>
                <Grid container justify="center">
                    <Grid container spacing={1}>
                        <Grid className={classes.con} item xs={4} sm={4} md={4}>
                            <img className="card-img" src="assets/img/people.png" alt="" />
                        </Grid>
                        <Grid className={classes.con} item xs={4} sm={4} md={4}>
                            <Card className={classes.card}>
                                <CardHeader title="Pendaftaran Pemberi Kerja" titleTypographyProps={{ align: 'center' }}>
                                </CardHeader>
                                <CardContent>
                                    <Typography variant="body" align="center" color="textSecondary" component="p">Instansi/Perusahaan yang ingin mendaftarkan pekerjanya sebagai Peserta Tapera</Typography>
                                </CardContent>
                                <div className={classes.paper}>
                                    <CardActions>
                                        <Button variant="outlined" style={{ backgroundColor: '#E2E2E2', color: '#008F4C' }}>Pelajari Lebih Lanjut</Button>
                                    </CardActions>
                                    <CardActions>
                                        <Button href="/lembarpersetujuan" variant="outlined" style={{ backgroundColor: '#008F4C', color: '#fff' }}>Daftar</Button>
                                    </CardActions>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Element>
    );
}
