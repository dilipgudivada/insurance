import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import SigninPage from './Containers/SinginPage';
import LandingPage from './Containers/LandingPage';
import MenuIcon from '@material-ui/icons/Menu';
import { common } from '@material-ui/core/colors';
import ViewportProvider from './_hooks';
export default function App() {
  const style = {
    menuicon:{
      position:"fixed",
      padding:"25px",
      "font-size": "1.7875rem",
      color: common.white,

    }

  };

let isLoggedIn=localStorage.getItem('isUserLoggedIn')?Landing:Home

  return (
    <Router>
    <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/home" component={isLoggedIn} />
         {/* <Route path="/explore" component={Explore} /> */}
       </Switch>
       </Router>
  );
} 

function Home() {
  const style = {
    height: "100%",
    width:"100%",
    "margin-left": "0%",
    "margin-right": "0%",
    "padding-left": "0px",
    "padding-right": "0px",
    "backgroundImage": "linear-gradient(269.7deg, #01ADD5 0.26%, #005775 99.4%)"
  };
  console.log("home page being called");
  return (
  <Container style={style} component="main"  maxWidth="100%">
  <SigninPage/>
  </Container>);
}
function Landing() {
  const style = {
    height: "100%",
    width:"100%",
    "margin-left": "0%",
    "margin-right": "0%",
    "padding-left": "0px",
    "padding-right": "0px",
    "backgroundImage": "linear-gradient(269.7deg, #01ADD5 0.26%, #005775 99.4%)"
  };
  
  let userDetails=localStorage.getItem('userDetails')
  return (
  <Container style={style} component="main"  maxWidth="100%">
  <LandingPage userDetails={userDetails}/>
  </Container>);
}