import Dashboard from '../Dashboard'
import { TextField,Grid, FormControlLabel, Checkbox, Box, Button, Card, CardContent, Avatar, Typography, CardActions, Divider } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

export default function PanduanPengguna() {
    
    return <div style={{ margin: '50px' }} >
        <Grid container
            spacing={2}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
            <Grid item >
                <Typography variant="h4" style={{color:'green'}}>PANDUAN PENGGUNA</Typography>
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
            <Typography variant="button" style={{color:'grey'}}><span style={{color:'blue'}}>Consectoture adipescing,</span> testing item 1</Typography>
            </Grid>
            <Grid item>
            <Typography variant="button" style={{color:'grey'}}><span style={{color:'blue'}}>Consectoture adipescing,</span> testing item 2</Typography>
            </Grid>
            <Grid item>
            <Typography variant="button" style={{color:'grey'}}><span style={{color:'blue'}}>Consectoture adipescing,</span> testing item</Typography>
            </Grid>
            <Grid item>
            <Typography variant="button" style={{color:'grey'}}><span style={{color:'blue'}}>Consectoture adipescing,</span> testing</Typography>
            </Grid>
            
        </Grid>
    </div>
}
PanduanPengguna.Layout = Dashboard;