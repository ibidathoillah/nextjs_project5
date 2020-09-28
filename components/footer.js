import { Typography, Container, Grid, Link, Box, ListItemText, ListItem, Divider, IconButton } from "@material-ui/core";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import Copyright from './copyright';

const useStyles = makeStyles((theme) => ({
  footer: {
    //borderTop: `1px solid ${theme.palette.divider}`,
    //marginTop: theme.spacing(3),
    color: '#fff',
    background: '#CDCDCD',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    '& .MuiBox-root': {
      flexGrow: 1,
    },
    '& ul': {
      listStyleType: "none",
      padding: '0px'
    },
  },
}));

const footers = [
  {
    title: 'IKUTI KAMI',
    description: [
      { info: 'Instagram', url: 'https://www.instagram.com' },
      { info: 'Twitter', url: 'https://www.twitter.com' },
      { info: 'Facebook', url: 'https://www.Facebook.com' }
    ],
  },
  {
    title: 'INFORMASI & BANTUAN',
    description: [
      { info: 'FAQ', url: '' },
      { info: 'Kebijakan & Privasi', url: '' },
      { info: 'Syarat & Ketentuan', url: '' }
    ],
  }
];

export default function Footer() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" component="footer" className={classes.footer}>
      <Grid container maxwidth="xs">
        <Box>
          <Copyright></Copyright>
        </Box>
        {footers.map((footer) => (
          <Grid item xs={3} key={footer.title}>
            <Typography variant="h6" color="inherit" gutterBottom>
              {footer.title}
            </Typography>
              {footer.description.map((desc) => (
                <ListItem>
                    {(() => {
                      switch (desc.info) {
                        case "Instagram": return <InstagramIcon />;
                        case "Twitter": return <TwitterIcon />;
                        case "Facebook": return <FacebookIcon />;
                        default: return "";
                      }
                    })()}
                    <ListItemText >{` ${desc.info}`}</ListItemText>
                </ListItem>
              ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}