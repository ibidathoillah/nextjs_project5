import { Typography, Link} from "@material-ui/core";
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  li: {
    paddingTop:'11px', 
    paddingBottom:'11px'
  },

}));

export default function Copyright() {
  const classes = useStyles();
    return (
      <>
      <Typography variant="h6" align="left" gutterBottom>
        TAPERA
      </Typography>
      <ul>
        <li className={classes.li}> BP Tapera Wisma Iskandarsyah Blok B2, B3 dan C3</li>
        <li className={classes.li}> Jl. Iskandarsyah Raya Kav. 12-14 Kebayoran Baru Jakarta Selatan 12160</li>
        <li className={classes.li}> Call Center 156. {'Copyright © '}
        <Link href="https://material-ui.com/" style={{ color: '#fff'}}>
          Tapera
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}</li>
      </ul>
      </>
    );
  }