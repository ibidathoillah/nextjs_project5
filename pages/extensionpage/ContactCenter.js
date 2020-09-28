import Dashboard from '../Dashboard'
import { TextField,Grid, FormControlLabel, Checkbox, Box, Button, Card, CardContent, Avatar, Typography, CardActions, Divider } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AddLocationIcon from '@material-ui/icons/AddLocation';

export default function ContactCenter() {
    
    return <div style={{ margin: '50px' }} >
        <Grid container
            spacing={2}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
            <Grid item >
                <Typography variant="h4" style={{color:'green'}}>Contact Center</Typography>
            </Grid> 
            <Grid item  xs={6} >
                <TextField
                margin="dense"
                    
                    variant="outlined"
                    fullWidth="true"
                    style={{borderRadius:'10px'}}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid item>
                <Grid container 
                direction="rows"
                spacing={1}
                justify="flex-start"
                alignItems="start">
                    <Grid item ><HeadsetMicIcon/></Grid>
                    <Grid item xs={1}>Call Center</Grid>
                    <Grid item>125</Grid>
                </Grid>
             </Grid>
             <Grid item>
                <Grid container 
                direction="rows"
                spacing={1}
                justify="flex-start"
                alignItems="start">
                    <Grid item ><EmailIcon/></Grid>
                    <Grid item xs={1}>Email</Grid>
                    <Grid item>Lyanan@gmail.com</Grid>
                </Grid>
             </Grid>
             <Grid item>
                <Grid container 
                direction="rows"
                spacing={1}
                justify="flex-start"
                alignItems="start">
                    <Grid item ><WhatsAppIcon/></Grid>
                    <Grid item xs={1}>Whatapp</Grid>
                    <Grid item>08122563069</Grid>
                </Grid>
             </Grid>
             <Grid item>
                <Grid container 
                direction="rows"
                spacing={1}
                justify="flex-start"
                alignItems="start">
                    <Grid item ><HeadsetMicIcon/></Grid>
                    <Grid item xs={1}>Address</Grid>
                    <Grid item xs={3}>BP Tapera Wisma IskandarMuda Block B2,B3 dan C3 Jln Iskandar Raya Kav 12-14 Kebayoran Baru Jakarta Selatan 12160</Grid>
                </Grid>
             </Grid>
           
            
        </Grid>
    </div>
}
ContactCenter.Layout = Dashboard;