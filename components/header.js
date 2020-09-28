import React from 'react';
//import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import Scroll from 'react-scroll';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Popover from "@material-ui/core/Popover";
import Slide from '@material-ui/core/Slide';
import styles from "./popoverStyles.js";
import { logout } from "../utils/authresetpass";
import Paper from '@material-ui/core/Paper';
import cookie from 'js-cookie';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Link from 'next/link';
// import { getJSDocReturnTag } from 'typescript';

// import { withAuthSync, auth } from "../utils/authprofile";
// import Profile from "../pages/profile";
//import Modal from 'react-bootstrap/Modal'
//import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiAppBar-positionStatic': {
      background: '#008F4C',
    },
    '& .MuiToolbar-root': {
      flexWrap: 'wrap',
      color: '#fff'
    },
    '& .MuiTypography-root': {
      flexGrow: 1,
      letterSpacing: '4px',
    },
    '& .MuiButton-root': {
      letterSpacing: '1px',
      color: '#fff',
      borderRadius: '25px',
      border: 'none',
      "&:hover": {
        background: '#fff',
        color: '#008F4C'
      }
    },
    '& nav .MuiIconButton-root': {
      display: "none"
    },
    [theme.breakpoints.down('md')]: {
      '& nav a.MuiButtonBase-root': {
        display: "none"
      },
      '& nav a.MuiIconButton-root':{
        float: 'right',
        display: 'block',
        color: "#fff",
        "&:hover": {
          background: '#fff',
          color: '#008F4C'
        }
      }
    },
    margin: {
      margin: theme.spacing(1),
    },
  },dropdownmenu: {
    flexGrow: 1,
   },
    dropdownbutton:{
      background: '#fff',
     color: '#008F4C',
     width: '100%',
      "&:hover": {
        background: 'none',
        color: '#008F4C',
        width: '100%',
    }
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: 20,
  },
  title: {
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: 7,
  },
  username: {
    color: 'white',
    fontSize: 17,
  },
}));
const useStylesN = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Header = () =>  {
  
  const classes = useStyles()
  //const router = useRouter()
  const ScrollLink = Scroll.Link
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const classesN = useStylesN()
  const [anchorElBottom, setAnchorElBottom] = React.useState(null)
  const [openDl, setOpen] = React.useState(null)
  const openD = Boolean(openDl)
  const user = cookie.get('userData')
  


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClickOpen = () => {
    handleClose();
    setOpen(true);
    // PopupLogout();
  };

  const handleCloseD = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    logout();
  };

  // React.useEffect(() => {
  //   handleError_msg();
  // }, []);


  const dataNotif = [   
    { msg: "penggantian password", description: "berhasil", link:"" },
    { msg: "redirect ", description: "profile", link:"profile" },
    { msg: "penggantian id", description: "gagal", link:"" },
  ];

  
  function test(data){
    if (data.link === ""){
      return data.description
      
    }else{
      return <a href={data.link}>{data.description}</a>
    }
  }
  
  function render(user) {
    if (user) {
      const userdata = JSON.parse(user)
      return <div className={classes.root}>
      <style jsx>{`
        .judul {
          color: white;
        }
      `}</style>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
        <Link href="/menuutama">
          <img src="/assets/img/logo.jpg"></img>
          </Link>
          <Typography noWrap variant="h5" >
            <a className="judul" href="/menuutama"></a>
          </Typography>
          {/* <nav> */}
            <IconButton href="/bantuan" aria-label="informasibantuan" className={classes.margin}>
            <HelpOutlineIcon />
            </IconButton>
          <div>
            <IconButton
              id="iconBtnNotif"
              onClick={event => setAnchorElBottom(event.currentTarget)}>
              <NotificationImportantIcon/>
            </IconButton>
            <Popover
              classesN={{
                paper: classesN.popover
              }}
              open={Boolean(anchorElBottom)}
              anchorEl={anchorElBottom}
              onClose={() => setAnchorElBottom(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              
              <Paper className={classes.title}>
              <h3 className={classes.popoverHeader}>  NOTIFIKASI  </h3>
              </Paper>
              {dataNotif.map((data, index) => (
              <Paper className={classes.paper}>
              <div className={classes.popoverBody} key={index} id="notifkonten">
                Field: {data.msg}
                </div>
                <div className={classes.popoverBody} key={index} id="notifkonten">
                Message: {test(data)}
                </div>
              
              </Paper>
              )
              )
            }
            </Popover>

            <IconButton
              id="iconBtnProfile"
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
              variant="contained" 
            >
              <AccountCircleIcon/>
              <div></div>&nbsp;
              <div className={classes.username}>
              
              {userdata.username}
              </div>
            </IconButton>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem><Button className={classes.dropdownbutton} id="btnDropDownLihatProfil" href='/profile'>Lihat Profil</Button></MenuItem>
              <MenuItem onClick={handleClickOpen}><Button className={classes.dropdownbutton} id="btnDropDownLogout">Logout</Button>
              </MenuItem>
            </Menu>
            <Dialog
              open={openD}
              id="dialog"
              TransitionComponent={Transition}
              keepMounted
              onClose={handleCloseD}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Konfirmasi Keluar"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Apakah anda yakin ingin keluar?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseD} color="primary">
                Tidak
              </Button>
              <Button onClick={handleLogout} color="primary" autoFocus>
                Ya
              </Button>
            </DialogActions>
            </Dialog>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    }else{
      return <div className={classes.root}>
      <AppBar position="static" color="default" elevation={0}>
      
      </AppBar>
    </div>
    }
  }

  return (
    render(user)
  );
}

export default Header