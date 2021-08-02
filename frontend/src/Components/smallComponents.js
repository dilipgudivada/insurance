import React from 'react';
import logoPng from '../images/logoPng.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({

    logo: {
      content: `url(${logoPng})`,
      top: "3%",
  left: "44%",
  width: "83px",
  height: "83px",
  position: "absolute"
  },
  underline:{
    top: "21%",
    left: "3%",
    width: "94%",
    height: "3px",
    position: "absolute",
    background: "#e5e5e7"
  },
button:{
   top: "50%",
   left: "35%",
  width: "15%",
  height: "7%",
  position: "absolute",
  borderRadius: "27px"
},
fontStyle:{
  top: "11%",
  left: "11%",
  color: "#005775",
  width: "102px",
  height: "33px",
  position: "absolute",
  fontSize: "20px",
  fontStyle: "normal",
  textAlign: "center",
  fontFamily: "Philosopher",
  fontWeight: "bold",
  lineHeight: "34px"
},
LoggedInUserInfo:{
  "position":"fixed","top":"0px","left":"10%"
}
  
  }));


export function Itailogo(size) {
  const classes = useStyles();
  return <div className={classes.logo} ></div>;
}
export function Underline (position){
  const classes = useStyles();
  const style={
    top:position.top,
     }
  return <div  style={style}  className={classes.underline}></div>
}
export function FormHeader(props) {
  return <h1> {props.UserDialogHeading}</h1>;
}

export function LoggedInUserInfo(props) {
  const classes = useStyles();
  console.log("prosps are herer", props)
  return <h2 className={classes.LoggedInUserInfo}>Welcome {props.user} !</h2>;
}
export function CustomButton (text){
  const classes = useStyles();

 
 const style={
left:text.left,
cursor:"pointer"
 }
  return( 
    <Button onClick={text.onClick}variant="contained" style={style} className={classes.button} color="primary">
    {text.text}
  </Button>
  );
  

}



 
