import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Itailogo,LoggedInUserInfo } from '../Components/smallComponents';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  topMenu:{
    height: "100px"
  },  
  menuicon:{
    margin: "16px",
   
  },
  insurenceHeading:{
    float: "right",
    /* align-content: center; */
    // position: "absolute",
    // top: "1%",
    // left: "44%",
    "padding-right":"10%"
  },
  logo:{
    top:"0% !importent" 
  },
  logout:{
    "position":"fixed","bottom":"3%","left":"1%"
  }
});

export default function SideMenu(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
const handleLogout =() =>{
  localStorage.setItem("isUserLoggedIn", false);
}
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Users', 'Insurences'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <PeopleIcon onClick={()=>props.handleMenu("USERS")}/> : <AssignmentIcon onClick={()=>props.handleMenu("Insurance")}/>}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  return (
    <div className={classes.topMenu}>
        <React.Fragment >
        
          <MenuIcon onClick={toggleDrawer('left', true) } className={classes.menuicon}/>
          <ExitToAppIcon className={classes.logout} onClick={()=>handleLogout()}/>
          <LoggedInUserInfo user={props.user.FirstName}/>
          <Itailogo className={classes.logo}/>
          <h1 className={classes.insurenceHeading}>{props.heading}</h1>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
     
    </div>
  );
}
