import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import SigninPage from './Containers/SinginPage';
import MenuIcon from '@material-ui/icons/Menu';
import { common } from '@material-ui/core/colors';

export default function App() {
  const style = {
    menuicon:{
      position:"fixed",
      padding:"25px",
      "font-size": "1.7875rem",
      color: common.white,

    }

  };

  return (
    <Router>
      <div>
        
        <Link to="/"><MenuIcon  style={style.menuicon}/></Link>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
      </div>
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
  return (
  <Container style={style} component="main"  maxWidth="100%">
  <SigninPage/>
  </Container>);
}