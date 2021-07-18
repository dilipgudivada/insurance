import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Itailogo, Underline,CustomButton} from '../Components/smallComponents';
import TopDentists2020Opener from "../images/TopDentists2020Opener.png";
import {SIGNING_TEXT,SIGNUP_TEXT} from '../Constants/generalConstants';
import {HomePageFooterMenu} from '../Components/HomePageFooterMenu';
import DraggableDialog from '../Components/DraggableDialog';
function Copyright() {
  return (
    <div >

    </div>
  );
}

const useStyles = makeStyles((theme) => ({

  singinContainer: {
    height: "100vh",
    backgroundImage: `url(${TopDentists2020Opener})`,
    'background-repeat': 'no-repeat',
    'background-size': '100vh 100vh',
    'background-size': 'cover'
},
heading:{
  top: "37%",
  left: "2%",
  color: "#FFFFFF",
  width: "98%",
  height: "60px",
  position: "absolute",
  fontSize: "2rem",
  fontStyle: "normal",
  textAlign: "center",
  fontFamily: "Philosopher",
  fontWeight: "bold",
  lineHeight: "67px",
  textShadow: "0px 6px 3px rgb(0 0 0 / 75%)"
},


}));

export default function SigninPage() {
  const [open, setOpen] = React.useState(false);
  const [signin, setSignin] = React.useState(false);

  const handleClickOpen = (value) => {

    setOpen(true);
    if(value==signin){
      setSignin(true)
    }
    else{
      setSignin(false)
    }
  };

  const classes = useStyles();
const style={
  underline:{
    top:"30%"
  }
}
  return (
    <div className={classes.singinContainer}>
    <Container maxWidth="xs" >
    <Itailogo/>
    <Underline/>
    <div className={classes.heading}>INSURANCE VERIFICATION FORM</div>
            <CustomButton text={SIGNING_TEXT} Color={"white"} onClick={()=>handleClickOpen(signin)} />
            <CustomButton text={SIGNUP_TEXT} Color={"white"} onClick={()=>handleClickOpen()}left={"57%"}/>
    <Underline top={"88%"}/>
    <HomePageFooterMenu/>
    <DraggableDialog 
    open={open}
    setOpen={setOpen}
    signin={signin}

    />
    </Container>
    </div>
  );
}

