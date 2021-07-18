import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

fontStyle:{
    width: "169px",
    height: "33px",
    fontFamily: "Philosopher",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#FFFFFF",
    float:"left"
},
list:{
    position: "absolute", bottom: "0%", left:"20%"
}
  }));


export function HomePageFooterMenu(size) {
  const classes = useStyles();
  const elements = ['Previous saved', 'Support', 'Contact Us'];
  return (
    <ul className={classes.list}>
      {elements.map((value, index) => {
        return <div key={index} className={classes.fontStyle}>{value}</div>
      })}
    </ul>
  )
}


 
