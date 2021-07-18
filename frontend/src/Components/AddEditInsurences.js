//add code for form to add user here  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {FormHeader} from './smallComponents';
import TextField from '@material-ui/core/TextField';
import {ServiceCall} from '../Services/Services';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AddEditInsurences(props) {
  const classes = useStyles();
const UserDialogHeading ="Add Insurence"
const [overalldata, setOverAllData] =  React.useState({});
const [type, setType] =  React.useState("");
const [url, seturl] =  React.useState("");

const checkifDPresent=(e)=>{
  let x= false;
  if(e[0][0]==="D"){

let methodCode= e[0].slice(0, 5)
Object.entries(overalldata).map(([key, value], i) =>  {
  
  if(methodCode===key.slice(0, 5)&&(typeof value == "boolean")){
 
    if(value===true){
      console.log("value", value )
      x= true;
    }
    else{
      x= false;
    }
  }
 
})
  }
  else{
    x= true;
  }

  return x;
}


React.useEffect(() => {
 
  setOverAllData(props.allInsurances.allInsurances);
   Object.entries(props.allInsurances.allInsurances).map(([key, value], i) =>  {

  })
  if(props.allInsurances.EditInsurance){
    setType("put");
    seturl("api/insurance/:"+props.allInsurances.allInsurances.PatientID);
  }
  else{
    setType("post");
    seturl("api/insurance")
  }

}, []);
const handlesubmit=()=>{
  ServiceCall
  .postService(url, type, overalldata )
  .then((data) => alert(data));
}

const handleTextChange = (event) => {
  // console.log("text is updatedsss",overalldata)
  if(event.target.name[0]==="c"){
    
   var x= event.target.name.substring(1)
  setOverAllData({ ...overalldata, [x]: event.target.checked })

  }
  else{
setOverAllData({ ...overalldata, [event.target.name]: event.target.value });
  }
  
};

const Buttonstyle ={
  position: "fixed",
  bottom: "10%",
  left: "90%",
  "background-color": "#3f51b5",
  "font-size": "16px",
  cursor: "pointer"
}

  return (
    <div className={classes.root}>
     
 {props.allInsurances.EditInsurance? <FormHeader UserDialogHeading={"Edit Insurance"}/>:<FormHeader UserDialogHeading={"Add Insurance"}/>}
     
    <Button style={Buttonstyle}  primary onClick= {handlesubmit}>submit</Button>
      { props.allInsurances.allInsurances  ?  
      <Grid container spacing={3}> 
      {Object.entries(overalldata).map(([key, value], i) =>  {
    		return (
          <Grid item xs={3}>
          
          {value===true || value===false?  
         
          <FormGroup >
      <FormControlLabel
        control={<Checkbox checked={value} onChange={handleTextChange} name={"c"+key} />}
        label={key}
      /> </FormGroup>:
        checkifDPresent([key,value])?
        <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" 
      name={key}
      label={key}
      defaultValue={value}
      onChange={handleTextChange}
      variant="outlined" />
      </form>:null
    

    
      
    }
          </Grid>
    		)
		})}
          </Grid>
      :
      null}
 
     
      
    </div>
  );
}