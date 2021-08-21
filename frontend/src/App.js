import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import SigninPage from './Containers/SinginPage';
import LandingPage from './Containers/LandingPage';
import { useSelector } from "react-redux";
export default function App() {
  
const loginUserReducer  = useSelector(state => state.loginUserReducer);
const isUserIdExists = loginUserReducer?.data?.UserId;

  return (
    <Router>
    <Switch>
         <Route exact path="/" component={Home} />
        {isUserIdExists  ? <Route path="/home" component={Landing} /> : <Redirect to="/" /> }  
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