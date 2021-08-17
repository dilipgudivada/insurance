import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {LOGIN_API} from "../Constants/urlConstants.js";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logoPng from '../images/logo.jpg';

const useStyles = makeStyles((theme) => ({
  paper: {
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
  },
  submit: {
    margin: theme.spacing(2, 0, 2, 0),
  },
  logo: {
    content: `url(${logoPng})`,
    width: 300,
    height: 160,
  }
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

  <Typography component="div">
    <div className={classes.logo}></div>
  </Typography>
  <form className={classes.form} noValidate>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="User Name"
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

    <Button
    type='button'
    fullWidth
    variant="contained"
    color="danger"
    className={classes.submit}
    onClick={props.handleClose}>
            Cancel
          </Button>
  </form>
</div>
{values.isError ? <span className = "Login-ErrorMessage">{values.errorMessage}</span>: ""}
</Container>
  );
};
export default Login;
