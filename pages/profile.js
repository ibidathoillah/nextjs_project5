import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Dashboard from './Dashboard';
import { Avatar, Typography, TextField,Button  } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        height: '90vh',
        boxShadow: 'none',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[200]),
        backgroundColor: '#ffb548',
        width: '100px',
        height: '100px'
    },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function profile() {
    const { useState } = React;
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [opent, setOpenn] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    
    const handleEdit = () => {
        setBtnDisabled(false);
      };
      

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        // setOpenn({
        //     opent:true
        //   },
        //   ()=>{
        //     setTimeout(function () {
        //         setOpenn({opent:false})
        //     }, 5000);//5 Second delay   
        //   }
     //   );
      };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container
                justify="flex-start"
                alignItems="stretch"
                direction="row">

                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} style={{ backgroundColor: '#bdbdbd' }}>
                        <Grid container direction="column" justify="center" alignItems="center"
                            spacing={2}
                            >
                            <Grid item><Avatar src="/assets/img/profileicon.png" className={classes.orange} /></Grid>
                            <Grid item> <Typography>Admin</Typography></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper} style={{ paddingLeft: '40px' }}>
                        <Grid item container direction="column" justify="space-between">   <Grid container direction="column" justify="flex-start"
                            alignItems="flex-start">
                            <Grid item><Typography variant="h4" style={{ color: 'green', paddingBottom: '30px' }}>UBAH PROFILE PEMBERI KERJA</Typography></Grid>
                            <Grid item> <Typography variant="subtittle2" >Nama*</Typography></Grid>
                            <Grid item style={{ paddingBottom: '10px' }} value="oke" > <TextField defaultValue="admin" disabled={btnDisabled} required fullWidth variant="outlined" margin="dense" style={{ width: '40vw' }}> </TextField></Grid>
                            <Grid item> <Typography variant="subtittle2" >Alamat*</Typography></Grid>
                            <Grid item style={{ paddingBottom: '10px' }} > <TextField  required defaultValue="Jln Sudirman" disabled={btnDisabled} fullWidth variant="outlined" margin="dense" style={{ width: '40vw' }}> </TextField></Grid>
                            <Grid item> <Typography variant="subtittle2" >Label</Typography></Grid>
                            <Grid item style={{ paddingBottom: '10px' }} > <TextField fullWidth variant="outlined" disabled={btnDisabled} margin="dense" style={{ width: '40vw' }}> </TextField></Grid>
                            <Grid item> <Typography variant="subtittle2" >Label</Typography></Grid>
                            <Grid item style={{ paddingBottom: '10px' }} > <TextField fullWidth variant="outlined" disabled={btnDisabled} margin="dense" style={{ width: '40vw' }}> </TextField></Grid>
                            <Grid item> <Typography variant="subtittle2" >Label</Typography></Grid>
                            <Grid item style={{ paddingBottom: '10px' }} > <TextField fullWidth variant="outlined"  disabled={btnDisabled} margin="dense" style={{ width: '40vw' }}> </TextField></Grid>

                        </Grid>
                            <Grid item container direction="row" justify="center"
                                alignItems="center" spacing={2}>
                                <Grid item ><Button variant="contained" color="primary" onClick={handleEdit}>
                                    Edit
</Button></Grid>
                                <Grid item ><Button variant="contained" color="secondary" type="submit" onClick={handleClickOpen}>
                                    Simpan
</Button></Grid>
                            </Grid>
                        </Grid>


                    </Paper>
                </Grid>

            </Grid>
            <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    
      >
        <DialogTitle  style={{textAlign:'center'}} id="alert-dialog-slide-title">{"ALERT"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Apakah Anda yakin data yang dilengapi sudah benar?
          </DialogContentText>
        </DialogContent>
        <DialogActions justify="center" alignItems="center" >
            <Grid container direction="row">
                <Grid item xs={6}><Button onClick={handleClose}     fullWidth="true"variant="contained" color="secondary" type="submit" >
                                    TIDAK
</Button> </Grid>
<Grid item  xs={6}><Button onClick={handleClose}  variant="contained" fullWidth="true" color="primary"  type="submit">
                                    YA
</Button> </Grid>
            </Grid>
       
        </DialogActions>
      </Dialog>

      <Dialog
          open={opent} 
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    
      >
        <DialogTitle  style={{textAlign:'center'}} id="alert-dialog-slide-title">{"ALERT"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Apakah Anda yakin data yang dilengapi sudah tesssss?
          </DialogContentText>
        </DialogContent>
        <DialogActions justify="center" alignItems="center" >
            <Grid container direction="row">
                <Grid item xs={6}><Button onClick={handleClose}     fullWidth="true"variant="contained" color="secondary" type="submit" >
                                    TIDAK
</Button> </Grid>
<Grid item  xs={6}><Button onClick={handleClose}  variant="contained" fullWidth="true" color="primary"  type="submit">
                                    YA
</Button> </Grid>
            </Grid>
       
        </DialogActions>
      </Dialog>
        </div>
    );
}

profile.Layout = Dashboard;