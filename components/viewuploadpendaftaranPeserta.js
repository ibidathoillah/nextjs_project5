import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Container, Typography, Button, Grid, Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import {Element} from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 2,
        alignItems: 'center',
        background: '#fff',
        '& .MuiCard-root':{
            borderRadius:'30px',
            border: '5px solid #008F4C',
        },
        '& .MuiCardHeader-root': {
            
            fontSize:'24px',
            alignItems: 'center',
        },
        '& .MuiButton-outlined': {
            alignItems: 'center',
            borderRadius: '30px',
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

export default function UploadPendaftaranPeserta() {
    const classes = useStyles();
    return (
        
        <Element id="daftarSection" name="daftarSection">
        <Container maxWidth="xl" component="main" className={classes.root}>
            <Grid container justify="center">
                <Grid item>
                    <Card>
                        <CardHeader title="Unggah Data Peserta" titleTypographyProps={{ align: 'center' }}>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body" align="center" color="textSecondary" component="p">Pemberi Keja saat mengunggah data peserta melalui menu Unggah Data Peserta</Typography>
                        </CardContent>
                        <div className={classes.paper}>
                            <CardActions>
                                <Button href="/upload" variant="outlined" style={{ backgroundColor: '#008F4C', color: '#fff' }}>Unggah</Button>
                            </CardActions>
                        </div>
                        
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </Element>
    );
}
