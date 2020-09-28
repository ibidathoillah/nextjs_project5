import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, List, ListItemText, ListItem, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import BusinessIcon from '@material-ui/icons/Business';
import CallIcon from '@material-ui/icons/Call';
//import InstagramIcon from '@material-ui/icons/Instagram';
//import TwitterIcon from '@material-ui/icons/Twitter';
//import FacebookIcon from '@material-ui/icons/Facebook';
import { styled } from '@material-ui/core/styles';


const MyTypography = styled(Typography)({
  // fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  // fontSize: '32px',
  lineHeight: '39px',
  color: '#008F4C'
});
const useStyles = makeStyles((theme) => ({
  typocontact: {
    // fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    // fontSize: '32px',
    lineHeight: '39px',
    color: '#008F4C',
  }
}));

// const contact = [
//     {
//         contact: 'Telepon',
//         detail: '(021) xxx xxx',
//     },
//     {
//         contact: 'Facebook',
//         detail: 'https://www.facebook.com/bp.tapera',
//     },
//     {
//         contact: 'Twitter',
//         detail: 'https://www.twitter.com/bp_tapera',
//     },
//     {
//         contact: 'Instagram',
//         detail: 'https://www.instagram.com/official_bptapera',
//     },
//     {
//         contact: 'e-mail',
//         detail: 'bp_tapera@gmail.com',
//     },
//     {
//       contact: 'Alamat Tapera',
//       detail: 'Jakarta Selatan, DKI Jakarta',
//   },
// ];

export default function Contact() {

  //const classes = useStyles();
  return (
    <div id='expansionContact'>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <MyTypography id='titleContactCenter'>
            Contact Center
          </MyTypography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
          <ListItem>
          <ListItemText >  Call Center  </ListItemText>
            <IconButton id='btnCall' href="tel:021-156"> <CallIcon fontSize="large" /> </IconButton>
            </ListItem>
            <ListItem>
              <ListItemText >  E-mail </ListItemText>
              <IconButton id='btnEmail' href='mailto:Layanan@tapera.go.id'> <EmailIcon fontSize="large" /> </IconButton>
            </ListItem>
            <ListItem>
              <ListItemText >  WhatsApp </ListItemText>
              <IconButton id='btnWhatsapp' href='https://api.whatsapp.com/send?phone=628118156156&text='> <WhatsAppIcon fontSize="large" /> </IconButton>
            </ListItem>
           <ListItem>
              <ListItemText >  Alamat </ListItemText>
              <IconButton id='btnAlamat' href='https://goo.gl/maps/pHAWJM8E1GwwRY518'> <BusinessIcon fontSize="large" /> </IconButton>
            </ListItem>
            {/* <ListItem>
              <ListItemText >  Instagram </ListItemText>
              <IconButton id='btnInstagram' href='/'> <InstagramIcon /> </IconButton>
            </ListItem>
            <ListItem>
              <ListItemText >  Twitter </ListItemText>
              <IconButton id='btnTwitter' href='/'> <TwitterIcon /> </IconButton>
            </ListItem>
            <ListItem>
              <ListItemText >  Facebook </ListItemText>
              <IconButton id='btnFacebook' href='/'> <FacebookIcon /> </IconButton>
            </ListItem> */}
          </List>
        </ExpansionPanelDetails>

      </ExpansionPanel>

    </div>
  )
}
