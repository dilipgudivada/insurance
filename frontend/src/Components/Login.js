import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {LOGIN_API} from "../Constants/urlConstants.js";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import {Itailogo} from '../Components/smallComponents';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
}));

const Login = (props) => {
  const classes = useStyles();

  const history = useHistory();
  const [values, setValues] = useState({
    userName: "",
    password: "",
    userData: "",
    errorMessage: "",
    isError: false,
    isUserLoggedIn: false,
  });

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value, isError: false });
  };

  const handleLogin = () => {
    var url = LOGIN_API;
    let bdy = {
      UserId: values.userName,
      Password: values.password,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(bdy),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
          return res.json();
      })
      .then((data) => {
        
        if(data.status === 200) {
         
        localStorage.setItem("userDetails", JSON.stringify(data.response[0]));
        localStorage.setItem("isUserLoggedIn", true);
        history.push("/home");
        
        } else {
          localStorage.setItem("isUserLoggedIn", false);
     
          setValues({...values, isError: true, errorMessage: data.error});
        }
      });
  };

  return (
<Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
  <Avatar className={classes.avatar}>
 
    <Itailogo/>
  </Avatar>
  <Typography component="h1" variant="h5">
    Sign in
  </Typography>
  <form className={classes.form} noValidate>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      autoComplete="email"
      name="userName"
      type="email"
      autoFocus
      onChange={handleChange}
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      onChange={handleChange}
    />
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
    <Button
      type='button'
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
      onClick={handleLogin}
    >
      Sign In
    </Button>
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid>
  </form>
</div>
{values.isError ? <span className = "Login-ErrorMessage">{values.errorMessage}</span>: ""}
<Box mt={8}>
  <Copyright />
</Box>
</Container>


  );
};
export default Login;
