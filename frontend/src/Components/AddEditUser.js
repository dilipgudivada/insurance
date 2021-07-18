//add code for form to add user here  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {FormHeader} from './smallComponents';
import TextField from '@material-ui/core/TextField';
import {ServiceCall} from '../Services/Services';
import Button from '@material-ui/core/Button';
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

export default function AddEditUser(props) {
  const classes = useStyles();

const [overalldata, setOverAllData] =  React.useState({});
const [type, setType] =  React.useState("");
const [url, seturl] =  React.useState("");



const handlesubmit=()=>{
  ServiceCall
  .postService(url, type, overalldata )
  .then((data) => alert(data));
}
React.useEffect(() => {
  setOverAllData(props.props.allUsers);
  if(props.props.EditUser){
    setType("put");
    
    seturl("api/updateuser/:"+props.props.allUsers.UserId);
  }
  else{
    setType("post");
    seturl("api/createuser")
  }
}, []);

const handleTextChange = (event) => {

  setOverAllData({ ...overalldata, [event.target.name]: event.target.value });
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
    { props.props.EditUser? <FormHeader UserDialogHeading={"Edit User"}/>:<FormHeader UserDialogHeading={"Add User"}/>}
         
    <Button style={Buttonstyle}onClick= {handlesubmit}>submit</Button>
      { props.props.allUsers ?  <Grid container spacing={3}> { Object.entries(props.props.allUsers).map(([key, value], i) =>  {
    		return (
          <Grid item xs={3}>
          <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" 
          name={key}
          label={key}
          defaultValue={value}
          onChange={handleTextChange}
          variant="outlined" />
          </form>
          </Grid>
    		)
		})}
          </Grid>
      :
      null}
    </div>
  );
}