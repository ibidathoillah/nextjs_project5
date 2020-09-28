import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {Typography,makeStyles,Badge,Drawer,Divider,Box,Grid,Avatar} from '@material-ui/core';
import { useRouter } from 'next/router';
import ListSubheader from '@material-ui/core/ListSubheader';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ViewListIcon from '@material-ui/icons/ViewList';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import HelpIcon from '@material-ui/icons/Help';
import Router from 'next/router'
import Link from '@material-ui/core/Link';
const secondaryListItems = (
  <div>
    <ListSubheader inset>Extension</ListSubheader>
  <Link   href="/extensionpage/PanduanPengguna">
  <ListItem button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Panduan " />
    </ListItem></Link>
   <Link  href="/extensionpage/FAQ"> <ListItem button>
      <ListItemIcon>
        <LiveHelpIcon />
      </ListItemIcon>
      <ListItemText primary="FAQ" />
    </ListItem></Link>
   <Link  href="/extensionpage/ContactCenter">
   <ListItem button>
      <ListItemIcon>
        <LiveHelpIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Center" />
    </ListItem></Link>
    
  </div>
);

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
        color:'black'
      },
      drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        backgroundColor:
          theme.palette.type === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
        height: '85vh',
        justifyContent: 'center',
        display: 'flex'
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
    
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },
}));
export default function AppbarDrawer({children,href}) {
    const [open, setOpen] = React.useState(false);
    const router = useRouter()
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openmenu = Boolean(anchorEl);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const navigate = ()=>
    {
      Router.push(`/`);
    };
    const handleprofile =()=>
    {
      Router.push(`/profilepemberikerja`);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return  router.pathname=='/'?<div></div>:<div>
        <AppBar style={{backgroundColor:'white',boxShadow:'0px 0px 1px 0px rgba(0,0,0,0.2)'}} position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
            <IconButton
            
                edge="start"
                style={{color:'grey'}}
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
                <MenuIcon />
            </IconButton>
            {/* <Link as={`/`} href="/Profile">
        <IconButton>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </IconButton>
      </Link> */}
      <img src="/assets/img/TAPERA.png" style={{height:'7vh',paddingRight:'10px'}} />
            <Typography
            
                variant="h6"
            align="center"
                noWrap
                className={classes.title}
            >
                {/* {router.pathname} */}
                <Grid container direction="rows"
                   justify="flex-start"
                   alignItems="center"
                   spacing={2}>
                  <Grid item>
                  BP TAPERA 
                  </Grid> 
                  <Grid item>  <Box style={{backgroundColor:"#ffb548",width:"4vw",height:'9vh'}}></Box></Grid>
                  </Grid>
               
              
      </Typography>
          
      <Link style={{color:'grey',paddingRight:'10px'}}>Bantuan & Informasi</Link>
      <Link style={{color:'grey'}}>Data Kepesertaan</Link>
            <IconButton style={{color:'grey'}}>
                <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />

                </Badge>

            </IconButton>
            <IconButton color="inherit" style={{color:'grey'}}
            onClick={handleMenu} >

                <AccountCircle />



            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openmenu}
                onClose={handleClose}
              >
                <MenuItem onClick={handleprofile}>Profile</MenuItem>
                <MenuItem onClick={navigate}>Log Out</MenuItem>
              </Menu>

        </Toolbar>
    </AppBar>
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
             
               
                <Grid container direction="column"  justify="center"
  alignItems="center" style={{paddingTop:'20px'}} spacing={1}>
                  <Grid item>   <Avatar style={{opacity:'1'}} aria-label="recipe" >
                        R
          </Avatar></Grid>
          <Grid item>  <Typography> admin</Typography></Grid>
                </Grid>
               
            </div>
            
            <List>
           <Link href="/InputPP">
           <ListItem button >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem></Link>
               <Link href="/Tablemaster">
               <ListItem button  >
                    <ListItemIcon>
                        <ViewListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile Pemberi Kerja" />
                </ListItem>
</Link>
            </List>
            <Divider />
            <List>{secondaryListItems}</List>
        </Drawer>
        {children}</div>
        
}
