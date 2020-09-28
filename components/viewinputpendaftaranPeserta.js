import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Container, Typography, Button, Grid, Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import {Element} from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 2,
        background: '#fff',
        alignItems: 'center',
        '& .MuiCard-root':{
            borderRadius:'30px',
            border: '5px solid #008F4C',
            
        },
        '& .MuiCardHeader-root': {
            fontSize:'50px'
        },
        '& .MuiButton-outlined': {
            alignItems: 'center',
            borderRadius: '30px',
            align: 'center',
            border: '5px solid #008F4C',
        }
        //padding: theme.spacing(2, 0),
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

export default function InputPendaftaranPeserta() {
    const classes = useStyles();
    return (
        
        <Element id="daftarSection" name="daftarSection">
        <Container maxWidth="xl" component="main" className={classes.root}>
            <Grid container justify="center">
                <Grid item>
                    <Card>
                        <CardHeader title="Pendaftaran Pekerja Input" titleTypographyProps={{ align: 'center' }}>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body" align="center" color="textSecondary" component="p">Pemberi Kerja saat meng-input data pendaftaran pekerja melalui menu Input Pendaftaran Pekerja</Typography>                            
                        </CardContent>
                        <div className={classes.paper}>
                            <CardActions >
                                <Button href="/inputpendaftaranpeserta" variant="outlined" style={{ backgroundColor: '#008F4C', color: '#fff'}}>Input</Button>
                            </CardActions>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </Element>
    );
}
