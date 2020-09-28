import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { makeStyles,useTheme  } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import { FormControlLabel,Checkbox,Button,Grid ,Card,CardMedia} from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Router from 'next/router'
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  
  style: { width: 'fullWidth', height: '5rem',display:"grid" },
};

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '67vw',
    color: 'black',
    backgroundColor: 'white'
 },
  image: {
    backgroundRepeat: 'no-repeat',
    // backgroundColor: '#008F4C',
    backgroundSize: 'cover',
    //backgroundPosition: 'center',
    backgroundImage: `url(${"/assets/img/bg.jpeg"})`
  },
  paper: {
    padding: theme.spacing(2),
  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'bottom'
  },
  root: {
    
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    padding:0,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin:0,
    height: '100vh',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),

  },

  gridstyle:
  {
    display:'grid',
    alignContent:'center'
  },
 
  "@global": {
	
		html: {
			height: "100%"
    },
    body:{
      margin:'0px'
    },
		"#componentWithId": {
			height: "100%"
    },
	}
}));



 

function validateEmail(value) {

  let error;

  if (!value) {
    
    error = 'Required';

  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {

    error = 'Invalid email address';

  }
  if(value!="admin@test.com")
  {
    error = 'Email Salah';
  }

  return error;

}
 


function validatePassword(value) {

  let error;

  if (value != 'admin') {

    error = 'Password Salah';

  }
  if(value.length<1)
  {
    error="Password salah"
  }

  return error;

}


async function Login() {
  await fetch('https://10.70.8.132/BranchReportCore/api/auth/login',
      {
          method: 'POST',
          body:
          {
              "email": "admin@test.com",
              "password": "admin"
          }
            ,
      })
      .then((r) => {
          console.log(r.status)
          const status = r.status;
          return r.json();
      })

      .then((data) => {
          //console.log(JSON.stringify(data.participants[1].nik))
          console.log("dara from prh", JSON.stringify(data))
    
      })
}

export default function Index() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
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

  return (
  
<div className={classes.root}>
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
  <div className={classes.overlay}>
  <Grid  justify="space-between" // Add it here :)
   container >
     
     <Grid item >
     <Container component="main" maxWidth="false" 
     style={{margin:'0px',padding:'0px',width:'29vw'}}
    >
     
     <Card style={{boxShadow:'none'}}>
     <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
         LOGIN
        </Typography>



        <Formik
         initialValues={{

          password: '',
 
          email: '',
 
        }}
 
         onSubmit={values => {
 
          // same shape as initial values
          console.log(values.email);
          setOpen(true);

           // Login(values);
        
          Router.push(`/InputPP`);
 
        }}
     
        >

          {({errors, touched, isValidating }) => (
            <Form 
       
            >
              <Field name="email" as={TextField} variant="outlined"
                margin="normal" 
                fullWidth label="email"
                type="email"
                required
                validate={validateEmail}
                
                >
                  
                

                </Field>
                <ErrorMessage name="email" component="div" />
              <Field name="password" as={TextField} variant="outlined"
                margin="normal"
                fullWidth label="password"
                type="password"
                validate={validatePassword}
                required
                ></Field>
                <ErrorMessage name="password" component="div" />

            <Grid container  justify="space-between" >
            <Grid item>
             <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Simpan User ID"
              />
             </Grid > 
                 <Grid item className={classes.gridstyle} >
                  <Link href="#" variant="body2">
                    Forgot password?
        </Link>
                </Grid>
            </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              
              >

                LOGIN
    </Button>
    <Typography align='center'
    paragraph="true" variant="subtitle2">Atau</Typography>
      <Button
                
                fullWidth
                variant="contained"
                color="secondary"
                href="/SignUp"
              >

                DAFTAR
    </Button>
    <Typography align='right'
    paragraph="true" variant="caption" color="textSecondary">Copyright A</Typography>
    <Typography variant="caption"   paragraph="true" color="textSecondary">Lakukan pendaftaran jika belum memiliki akun</Typography>
    <Typography variant="caption" paragraph="true" color="textSecondary">Kata sandi akan terkunci secara otomatis apabila telah melakukan kesalahan (5) kali</Typography>
   
    <Box borderColor="error.main" {...defaultProps}>
      <Typography color="error" align='center' variant="h5">HATI-HATI!</Typography>
      <Typography color="textSecondary" variant="caption" align="center">Jangan pernah bagikan password kamu kepada siapapun ya!</Typography>
      </Box>
            </Form>)
          }

        </Formik>

      </div>
     </Card>

    </Container>
     </Grid>
    
   </Grid>
  </div>
</div>
   
     
   
   
      
  );
}
