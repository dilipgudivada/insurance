import React from 'react';
import logoPng from '../images/logoPng.png';
import { makeStyles } from '@material-ui/core/styles';
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
    background: "#FFFFFF"
  },
button:{
   top: "50%",
   left: "35%",
  width: "15%",
  height: "7%",
  position: "absolute",
  background: "#FFFFFF",
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
}
  
  }));


export function Itailogo(size) {
  const classes = useStyles();
  return <div className={classes.logo} ></div>;
}
export function Underline (position){
  const classes = useStyles();
  const style={
    top:position.top
     }
  return <div  style={style}  className={classes.underline}></div>
}
export function CustomButton (text){
  const classes = useStyles();
  console.log("textg", text)
 
 const style={
left:text.left
 }
  return( <div style={style} className={classes.button}>
        <span className={classes.fontStyle}>{text.text}</span>
  </div>);
}



 
