import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import SigninPage from './Containers/SinginPage';
import LandingPage from './Containers/LandingPage';
export default function App() {
  

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
    "marginLeft": "0%",
    "marginRight": "0%",
    "paddingLeft": "0px",
    "paddingRight": "0px",
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
    "marginLeft": "0%",
    "marginRight": "0%",
    "paddingLeft": "0px",
    "paddingRight": "0px",
    "backgroundImage": "linear-gradient(269.7deg, #01ADD5 0.26%, #005775 99.4%)"
  };
  
  let userDetails=localStorage.getItem('userDetails')
  return (
  <Container style={style} component="main"  maxWidth="100%">
  <LandingPage userDetails={userDetails}/>
  </Container>);
}