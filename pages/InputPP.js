import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Dashboard from './Dashboard'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import { FormControlLabel, Checkbox, Box, Button, Card, CardContent, Avatar, Typography, CardActions, Divider } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Router from 'next/router'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
      './../assets/img/image1.png',
    },
    {
      label: 'Bird',
      imgPath:
      './../assets/img/image2.png',
    },
   
  ];
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),

        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridheight:
    {
        height: '22vh'
    },
    gridmini:
    {
        // paddingTop:theme.spacing(5),
        margin: '15px',
        height: '10vw',
        boxShadow: 'none'
    },
    gridheightbggrey:
    {
        height: '25vh',
        backgroundColor: '#d0c9c9'
    },
    footerheight:
    {
        height: '19vh',

    },
    gridheightbgminigrey:
    {
    
        height: '20vh',
        boxShadow: 'none',
       
        

    },
    hover:{
        '&:hover':{
            backgroundColor:'grey',
            marginLeft:'10px'

        },
    },
    imagebg:
    {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '24vh',
        backgroundImage: `url(${"/assets/img/bg.jpeg"})`,
    },
    img:{
        padding:0,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin:0,
        height: '24vh',
        display: 'block',
        overflow: 'hidden',
        width: '100%',
    },
    overlay: {
        position: 'absolute',
        top: '17vh',
        left: '47.3%',
        color: 'black',
        backgroundColor: 'transparent'

    },
    avatar:
    {
        width: '70px',
        backgroundColor: 'orange',
        height: '70px'
    },
    cardstyle:
    {
        boxShadow: "none",
        position: 'relative'

    },
    bggrey:
    {
        backgroundColor: 'grey'
    }
}));
const handleStepChange = (step) => {
    setActiveStep(step);
  };
export default function InputPP() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
    
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
    const handleMenu = ()=>
    {
      Router.push(`/Tablemaster`);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={0}
                direction="column"
                justify="flex-start"
                alignItems="stretch">
                <Card className={classes.cardstyle}>
                    <Grid item xs={12} >
                        <AutoPlaySwipeableViews
                            //axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            //  index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {tutorialSteps.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <img className={classes.img} src={step.imgPath} />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                    </Grid>
                    <div className={classes.overlay}> <Avatar aria-label="recipe" className={classes.avatar}>
                        R
          </Avatar></div>
                    <Grid item xs={12}  >
                        <Paper className={classes.gridheight}>
                            <Grid container
                                style={{ padding: '30px' }}
                                direction="row"

                                justify="center"
                                alignItems="flex-end">


                                <Grid item xs={2} >
                                    <Paper className={classes.gridheightbgminigrey} onClick={handleMenu} onTouchMove>
                                        <Grid container direction="column"
                                            justify="center"
                                            alignItems="center" 
                                            className={classes.hover}>
                                            <Grid item><PeopleIcon style={{ fontSize: 50 }} /></Grid>
                                            <Grid item><Typography align='center' style={{ color: '#a8b092' }}>Pengelolaan  </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item >
                                    <Paper style={{
                                        height: '15vh',
                                        boxShadow: 'none', marginBottom: '40px'
                                    }}><Divider orientation="vertical" /></Paper>
                                </Grid>
                                <Grid item xs={2} >
                                    <Paper className={classes.gridheightbgminigrey}>
                                        <Grid container direction="column"
                                            justify="center"
                                            alignItems="center"
                                            className={classes.hover}>
                                            <Grid item><ReceiptIcon style={{ fontSize: 50 }} /></Grid>
                                            <Grid item><Typography align='center' style={{ color: '#a8b092' }}>Billing Info  </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item >
                                    <Paper style={{
                                        height: '15vh',
                                        boxShadow: 'none', marginBottom: '40px'
                                    }}><Divider orientation="vertical" /></Paper>
                                </Grid>


                                <Grid item xs={2} >
                                    <Paper className={classes.gridheightbgminigrey}>
                                        <Grid container direction="column"
                                            justify="center"
                                            alignItems="center"
                                            className={classes.hover}>
                                            <Grid item><ContactMailIcon style={{ fontSize: 50 }} /></Grid>
                                            <Grid item><Typography align='center' style={{ color: '#a8b092' }}>Pengajuan Claim  </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                </Card>
                <Grid item xs={12}  >
                    <Paper className={classes.gridheightbggrey}>
                        <Grid container
                        
                            direction="row"
                            justify="center"
                            alignItems="center">
                            <Grid item xs={3} >

                                <Paper style={{ marginLeft: '10px', marginTop: '5px',marginBottom:'5px' }}>
                                    <Grid container direction='column' justify="space-between"
                                        alignItems="stretch">
                                        <Grid item container direction="column" justify="space-between"
                                            style={{ height: '15vh', backgroundColor: '#62b7cc', color: 'white' }} >
                                            <Grid item style={{ margin: '10px' }} >
                                                <Typography gutterBottom variant="subtittle" > TOTAL PESERTA
                                            </Typography>
                                            </Grid>
                                            <Grid item> <Typography variant='h6' align='center' style={{ marginBottom: '20px' }}>4.213.456</Typography></Grid>
                                        </Grid>
                                        <Grid item container direction="row" style={{ backgroundColor: '#135f72', color: 'white' }} justify="flex-end"
                                            alignItems="flex-end">
                                            <Typography gutterBottom variant="subtittle" style={{ paddingBottom: '3px' }}>  View Detail
        </Typography>  <ArrowRightIcon fontSize="large" />

                                        </Grid>
                                    </Grid>
                                </Paper>

                            </Grid>
                            <Grid item xs={3} >

                                <Paper style={{ marginLeft: '10px', marginTop: '5px',marginBottom:'5px'  }}>
                                    <Grid container direction='column' justify="space-between"
                                        alignItems="stretch">
                                        <Grid item container direction="column" justify="space-between"
                                            style={{ height: '15vh', backgroundColor: '#7ecc66', color: 'white' }} >
                                            <Grid item style={{ margin: '10px' }} >
                                                <Typography gutterBottom variant="subtittle" >  PENSIUN BULAN INI
            </Typography>
                                            </Grid>
                                            <Grid item> <Typography variant='h6' align='center' style={{ marginBottom: '20px' }}>4.122</Typography></Grid>
                                        </Grid>
                                        <Grid item container direction="row" style={{ backgroundColor: '#327a16', color: 'white' }} justify="flex-end"
                                            alignItems="flex-end">
                                            <Typography gutterBottom variant="subtittle" style={{ paddingBottom: '3px' }}>  View Detail
</Typography>  <ArrowRightIcon fontSize="large" />

                                        </Grid>
                                    </Grid>
                                </Paper>

                            </Grid>
                            <Grid item xs={3} >

                                <Paper style={{ marginLeft: '10px', marginTop: '5px' ,marginBottom:'5px' }}>
                                    <Grid container direction='column' justify="space-between"
                                        alignItems="stretch">
                                        <Grid item container direction="column" justify="space-between"
                                            style={{ height: '15vh', backgroundColor: '#cf738c', color: 'white' }} >
                                            <Grid item style={{ margin: '10px' }} >
                                                <Typography gutterBottom variant="subtittle" > TOTAL TABUNGAN
            </Typography>
                                            </Grid>
                                            <Grid item> <Typography variant='h6' align='center' style={{ marginBottom: '20px' }}>4.123.123</Typography></Grid>
                                        </Grid>
                                        <Grid item container direction="row" style={{ backgroundColor: '#8f1d3f', color: 'white' }} justify="flex-end"
                                            alignItems="flex-end">
                                            <Typography gutterBottom variant="subtittle" style={{ paddingBottom: '3px' }}>  View Detail
</Typography>  <ArrowRightIcon fontSize="large" />

                                        </Grid>
                                    </Grid>
                                </Paper>

                            </Grid>
                            <Grid item xs={3} >
                                <Paper className={classes.gridmini} style={{ backgroundColor: "transparent" }}>
                                    <Grid container
                                        direction="column"
                                        justify="center"
                                        alignItems="start">
                                        <Grid Item>
                                            <Typography variant="subtittle1">STATUS KEPESERTAAN</Typography>
                                        </Grid>
                                        <Grid container >
                                            <Grid item xs={2} >
                                                <Paper style={{ boxShadow: 'none', borderRadius: 'none', textAlign: 'center', backgroundColor: '#d04435' }}>10%</Paper>
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Paper style={{ boxShadow: 'none', borderRadius: 'none', textAlign: 'center', backgroundColor: '#48c833' }}>90% Aktiv</Paper>
                                            </Grid>
                                        </Grid>
                                        <Grid Item style={{ paddingTop: '20px' }}>
                                            <Typography variant="subtittle1">PENSIUN / MENINGGAL</Typography>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={3} >
                                                <Paper style={{ boxShadow: 'none', borderRadius: 'none', textAlign: 'center', backgroundColor: '#d85600' }}>30%</Paper>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Paper style={{ boxShadow: 'none', borderRadius: 'none', textAlign: 'center', backgroundColor: '#43ca2d' }}>70%</Paper>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper className={classes.footerheight}>  <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center">

                        <Grid item >
                            <Grid container
                                style={{ margin: '10px' }}
                                spacing={0}
                                direction="column"
                                justify="space-between"
                                alignItems="start">
                                <Grid item>
                                    <div>        <Typography variant="subtitle2">   <Box fontSize={13} fontWeight="fontWeightBold">   Badan Pengelola Tabungan Perumahan Rakyat (BP TAPERA)</Box></Typography>
                                        <Typography variant="caption">   <Box fontSize={10} color="gray" fontWeight="fontWeightBold">didirikan berdasarkan Undang Undang Nomor 4 Tahun 2016</Box></Typography>
                                        <Typography variant="caption">   <Box fontSize={10} color="gray" fontWeight="fontWeightBold">tentang Tabungan Perumahan Rakyat</Box></Typography>

                                    </div>
                                </Grid>
                                <Grid item>

                                    <div>  <Typography variant="caption">   <Box fontSize={10} color="gray" fontWeight="fontWeightBold">BP Tapera Wisma Iskandarsyah Blok B2, B3 dan C4 jln. Iskandarsyah Raya</Box></Typography>
                                        <Typography variant="caption">   <Box fontSize={10} color="gray" fontWeight="fontWeightBold">Kav 12-14 Kebayoran Baru Jakarta Selatan 12160</Box></Typography>
                                    </div>

                                </Grid>
                                <Grid item >
                                    <Typography variant="caption">   <Box fontSize={10} color="gray" fontWeight="fontWeightBold">Copyright @ Tapera 2020</Box></Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container
                                spacing={2}
                                direction="row">
                                <Grid item>
                                    <Grid container
                                        direction="column"
                                        alignItems="start">
                                        <Grid item>
                                            Informasi & Bantuan
                                         </Grid>
                                        <Grid item>
                                            FAQ
                                         </Grid>
                                        <Grid item>
                                            Kebijakan & Privasi
                                         </Grid>
                                        <Grid item>
                                            Syarat & Ketentuan
                                         </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item >
                                    <Divider orientation="vertical" color="red" />
                                </Grid>
                                <Grid item> <Grid container style={{ paddingRight: '15px' }}>

                                    <Grid item>
                                        Ikuti Kami</Grid></Grid></Grid>
                            </Grid>
                        </Grid>
                    </Grid></Paper>
                </Grid>

            </Grid>
        </div>
    );
}



InputPP.Layout = Dashboard;