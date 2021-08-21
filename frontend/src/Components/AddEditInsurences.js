//add code for form to add user here  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {ServiceCall} from '../Services/Services';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SaveIcon from '@material-ui/icons/Save';
import { useSelector } from 'react-redux';

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
  const loginUserReducer = useSelector(state => state.loginUserReducer);
  const userData = loginUserReducer?.data;
  const classes = useStyles();
const [overalldata, setOverAllData] =  React.useState({});
const [type, setType] =  React.useState("");
const [url, seturl] =  React.useState("");
const checkifDPresent=(e)=>{
  let x= false;
  if(e[0][0]==="D"){

let methodCode= e[0].slice(0, 5)
Object.entries(overalldata).forEach(([key, value], i) =>  {
 
  
  if(methodCode===key.slice(0, 5)&&(typeof value === "boolean")){
 
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
 
  setOverAllData(props.someInsurances);
  if(props.allInsurances.EditInsurance){
    setType("put");
    seturl("api/insurance/"+props.finalInsurenceToSend.PatientID);
  }
  else{
    setType("post");
    seturl("api/insurance")
  }

}, [props]);
const handlesubmit=()=>{
  if(props.allInsurances.EditInsurance){ 
    const finalData = {
      ...props.finalInsurenceToSend,
      UpdatedBy: userData.UserId
    };
    ServiceCall
    .postService(url, type, finalData )
    .then((data) => alert(data));
  } else {
    const finalData = {
      ...props.finalInsurenceToSend,
      LocationId: userData.LocationId,
      CreatedBy: userData.UserId
    };
    ServiceCall
    .postService(url, type, finalData )
    .then((data) => alert(data));
  }
}





  return (
    <div className={classes.root}>     
    
      { props.allInsurances.allInsurances  ?  
      <Grid container spacing={3}> 
      {Object.entries(overalldata).map(([key, value], i) =>  {
    		return (
          <Grid item xs={3}>
          
          {value===true || value===false?  
         
          <FormGroup >
      <FormControlLabel
        control={<Checkbox checked={value} onChange={props.handleTextChange} name={"c"+key} />}
        label={key}
      /> </FormGroup>:
        checkifDPresent([key,value])?
        <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" 
      name={key}
      label={key}
      defaultValue={value}
      onChange={props.handleTextChange}
      variant="outlined" />
      </form>:null
    }
          </Grid>
    		)
		})}
          </Grid>
      :
      null}
 
     
 <div style={{ position: 'fixed', bottom:20, right: 20}}>
<Button variant="contained" color="primary" style={{ marginRight: 20}} onClick= {handlesubmit}>
<SaveIcon />  Save
</Button>
</div>
    </div>
  );
}