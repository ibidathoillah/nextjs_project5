import Layout from '../components/layout';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles, fade, List, Typography, ListItemText, ListItem, Divider, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Contact from '../components/contact';
import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton'
//import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { grey } from "@material-ui/core/colors";
import InfoIcon from '@material-ui/icons/Info';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';



const MyTypography = styled(Typography)({
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '39px',
    color: '#008F4C'
});
const TextCari = styled(Typography)({
    // fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '300',
    // fontSize: '32px',
    lineHeight: '39px',
    color: '##A9A9A9'
});
const useStyles = theme => ({
    root: {
        //width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
        height: 900,
    },
    paper: {
        height: 900,
        // width: 300,
        flexGrow: 1,
        marginRight: theme.spacing(0),
        marginLeft: theme.spacing(0),
        /* Rectangle 28 */

        // position: 'absolute',
        // width: '380px',
        // height: 287,
        // // height: '928px',
        left: '0px',
        background: '#006637',
        letterSpacing: '1px',
        borderRadius: '0px',
        border: 'none',
        width: '100%',
        // marginRight: theme.spacing(2),
        // marginLeft: theme.spacing(2),
        // marginTop: theme.spacing(5),
        // marginBottom: theme.spacing(2),
    },
    faqpaper: {
        // height: 287,
        // width: 800,
        height: '100%',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        flexGrow: 1,
    },
    listitem: {
        flexGrow: 1,
        "&:hover": {
            background: '#fff',
            color: '#006637',
        },

    },
    typo: {
        // marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        // marginTop: theme.spacing(5),
        // marginBottom: theme.spacing(2),
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '29px',
        color: '#FFFFFF',
        "&:hover": {
            color: '#006637',
        },
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    iconbutton: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: 1,
        '& .MuiAppBar-positionStatic':
        {
            background: '#006637',
        }
    },
    text: {
        display: 'none',
        color: 'E5E5E5',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.75),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(0),
        marginLeft: 0,
        width: '100%',
        height: '3',
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(9),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'FFF',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: '3',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
});


class Informasi extends Component {
    constructor() {
        super();
    this.state = {
        showQna: false,
        showBantuanDanInformasi: true,
        showContact: false,
        showSearch: false,
        search: '',
    };
    this.onKeyUp = this.onKeyUp.bind(this);
  }
    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
        console.log(event.target.value);
    }

    renderQna = (props) => {
        if (!this.state.showQna) return '';

        return (
            <div id='expansionFaq'>
                {this.props.mapdata.faq.map((b) => (
                    <ExpansionPanel key={b.id}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <MyTypography id='titleFAQ'>
                                {b.title}
                            </MyTypography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography id='detailFAQ'>
                                {b.detail}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}

            </div>
        );
    }

    renderBantuanDanInformasi = (props) => {
        console.log(this.props.mapdata)
        if (!this.state.showBantuanDanInformasi) return '';

        return (
            <div id='expansionBantuan'>
                {this.props.mapdata.bantuan.map((b) => (
                    <ExpansionPanel key={b.id}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <MyTypography id='titleBantuan'>
                                {b.title}
                            </MyTypography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography id='detailBantuan'>
                                {b.detail}
                                <p>Klik <a href={b.url} target="_blank">di sini</a> untuk melihat panduan dalam format file <b>.pdf</b></p>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}

            </div>
        );
    }

    renderContact = () => {
        if (!this.state.showContact) return '';

        return (
            <Contact />
        );
    }

    renderSearch = (props) => {
        if (!this.state.showSearch) return '';
        
        console.log(this.props.mapdata)
        var searchfilter = this.props.mapdata.joined;
        var keyword = searchfilter.filter(
            (y) => {
                return y.title.toLowerCase().match(this.state.search.toLowerCase())
                   
                    || y.detail.toLowerCase().match(this.state.search.toLowerCase())
                   
            }
        ) 
        return (
            <div>
            <TextCari>Menampilkan hasil pencarian :</TextCari>
            <div></div>
            <div id='expansionBantuan'>{ 
        keyword.length > 0 ?
        keyword.map((z) => (
                    <ExpansionPanel key={z.id}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <MyTypography id='titleBantuan'>
                                {z.title}
                            </MyTypography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography id='detailBantuan'>
                                {z.detail}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )) : <div>Kata kunci tidak ditemukan, silahkan coba kembali...</div>
            }
            </div>
            </div>
        );
    }

    qnaClick = () => {
        this.setState({ showQna: true, showBantuanDanInformasi: false, showContact: false, showSearch: false });
    }

    bantuandDanInfromasiClick = () => {
        this.setState({ showBantuanDanInformasi: true, showQna: false, showContact: false, showSearch:false });
    }

    contactClick = () => {
        this.setState({ showContact: true, showBantuanDanInformasi: false, showQna: false, showSearch:false });
    }

    searchClick = () => {
        this.setState({ showContact: false, showBantuanDanInformasi: false, showQna: false, showSearch: false });
    }
    searchButtonClick = () => {
        this.setState({ showContact: false, showBantuanDanInformasi: false, showQna: false, showSearch: true });
    }
    onKeyUp(event) {
        if (event.charCode === 13) {
          this.setState({ showContact: false, showBantuanDanInformasi: false, showQna: false, showSearch: true });
        }
    }
    render() {
        
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.grow}>
                    <AppBar position="static">
                        <Toolbar id='searchBox'>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                  </div>
                                <InputBase
                                    value={this.state.search}
                                     onChange={this.updateSearch.bind(this)}
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }} 
                                    onClick={this.searchClick}
                                    onKeyPress={this.onKeyUp}
                                // inputProps={{ 'aria-label': 'search' }}
                                />
                                <IconButton onClick={this.searchButtonClick} ><SearchIcon fontSize='small' /></IconButton>
                            </div>
                            <Typography id='toolbarInfo' className={classes.text} noWrap variant="h6" noWrap>
                                BANTUAN DAN INFORMASI LAYANAN
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <Grid container maxwidth="xl" className={classes.root} spacing={0} justify="space-between"
                    alignItems="flex-start">
                    <Grid container item spacing={0} xs={2} sm={2} md={3} >
                        <Paper id='paperToggleMenuBantuanDanInformasi' className={classes.paper} elevation={2}>
                            <List>
                                <ListItem id='btnBantuanDanInformasi' className={classes.listitem} button onClick={this.bantuandDanInfromasiClick}>
                                    <ListItemText className={classes.typo} primary="Bantuan & Informasi" >  </ListItemText>
                                    <IconButton className={classes.iconbutton}> <InfoIcon style={{ color: grey[100] }} /> </IconButton>
                                </ListItem>
                                <Divider />
                                <ListItem id='btnContactCenter' className={classes.listitem} button onClick={this.contactClick}>
                                    <ListItemText className={classes.typo} primary="Contact Center" />
                                    <IconButton className={classes.iconbutton}> <ContactPhoneIcon style={{ color: grey[100] }} /> </IconButton>
                                </ListItem>
                                <Divider />
                                <ListItem id='btnFAQ' className={classes.listitem} button onClick={this.qnaClick}>
                                    <ListItemText className={classes.typo} primary="FAQ" />
                                    <IconButton className={classes.iconbutton}> <LiveHelpIcon style={{ color: grey[100] }} /> </IconButton>
                                </ListItem>
                                <Divider />

                            </List>
                        </Paper>
                    </Grid>
                    <Grid container item spacing={0} xs={10} sm={10} md={9}>
                        <Paper id='paperForBantuanDanInformasi' className={classes.faqpaper} elevation={0} >
                            {this.renderBantuanDanInformasi()}
                            {this.renderContact()}
                            {this.renderQna()}
                            {this.renderSearch()}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(Informasi)
