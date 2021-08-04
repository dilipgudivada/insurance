import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddEditUser from './AddEditUser';
import AddEditInsurences from './AddEditInsurences'
import {Underline} from '../Components/smallComponents';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  underline:{
    marginBottom:"25px",
    width: "94%",
    height: "3px",
    position: "relative",
    background: "#e5e5e7"
  },
}));
const history = [
  "D1351Sealants",
  "D1351Freq",
  "D1351Age",
  "D1351ToothRestrictions",
  "D1510SpaceMint",
  "D1510Freq",
  "D1510Age",
  "D1208Flouride",
  "D1208Freq",
  "D1208Age",
  "D0150Exam",
  "D0150Freq",
  "D0150LastDos",
  "D1110Prophy",
  "D1110Freq",
  "D1110LastDos",
  "D0274BiteWings",
  "D0274Freq",
  "D0274LastDos",
  "D0330Pano",
  "D0330Freq",
  "D0330LastDos",
  "D0220PAS",
  "D0220Freq",
  "D0220LastDos",
  "D9944NightGuard",
  "D9944NightFreq",
  "D9944NightLastDOS",
  "D9944CoveredFor",
  "D4341ScalingRootPlan",
  "D4341ScalingRootPlanFreq",
  "D4341ScalingRootPlanQuardsperDays",
  "D4341ScalingRootPlanLastDos",
  "D4355FullMonth",
  "D4355FullMonthFreq",
  "D4355FullMonthPocketDeptForSap",
  "D4355FullMonthLastDos",
  "D4910PerioMaint",
  "D4910PerioMaintFreq",
  "D4910PerioMaintAddEither",
  "D4910PerioMaintLastDos",
  "CrownsD2740",
  "Bridges",
  "MissTthClause",

  "WaitingPeriod",

] ;
const insuranceVerufication=  [
"FeeSchedule",
"FamilyCoverage",
"EffectiveDate",
"CalendarFiscalDates",
"YearlyMax",
"BenefitsUsed",
"IndDed",
"FamDed",
"DeductibleMet",
"HowLong",
"ReplacementPeriod",
"ProstheticPay",
"DowngradeComposites",
"DowngradeCrowns",
"OrthoCoveragePercentage",
"LifeTimeMax",
"OrthoDed",
"HasDedBeenMet",
"AgeLimit",
"OrthoPaidBy",
"WorkInProgress",
"BandingIntialPymt"
];
const insuranceInformation= [
  "InsuredEmployer",
    "InsCompanyNo",
    "InsCompany",
    "InsCompAddress",
    "InsRep",
    "RepNo",
"GroupNumber",
"PayorId"
];
const breakdown=[
"Preventative",
"BasicFillings",
"Major",
"SurgeryCoverage",
"EndoRootCanals",
"OralSurgeryExtractions",
"SurgExt",
"SimpleExt",
"D6010",
"ImplantsD6058",
"D6104",
"D6056",
"D4263",
"Periodontics",
"D6061",
"D6065",
"D4266",
"D7951",
"D7311",
"D7952",
"Denbures",
"FileOralSurg",
"Xrays",
"D0140SDTXAllowed",
"DoYouHaveToWait90Days",
"CanD3481BePerformedSameDay",
"D4381ArestinPerioChip",
"QuadsDoneOnSameDay",
"SitesDoneOnSameDay",
"WhatAreThePocketDepthRequirements",

"D4264",

"D6057",
"Notes",
"VerifiedBy",
"VerifiedDate",

];
const PatientInformation= [
  "PatientID",
    "GuestName",
    "GuestDOB",
    "InsuredName",
    "InsuredDOB",
    "InsuredSSN",
    "InsuredID",
    ]



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [devidedInsurances, setInsurances] = React.useState({});
  const [finalInsurenceToSend, setIncomingInsurances] = React.useState({});
  const handleTextChange = (event) => {
    console.log("finalInsurenceToSend",finalInsurenceToSend)
   if(event.target.name[0]==="c"){
     
    var x= event.target.name.substring(1)
    setIncomingInsurances({ ...finalInsurenceToSend, [x]: event.target.checked })
 
   }
   else{
    setIncomingInsurances({ ...finalInsurenceToSend, [event.target.name]: event.target.value });
   }
   
 };
  React.useEffect(() => {
    let htr={}
    let pInfo ={} 
    let bDown={}
    let inVer ={}
    let inInfo ={}
    console.log("some insurences",props )
    
    if(props.allInsurances){
      setIncomingInsurances(props.allInsurances)
     var x= Object.entries(props.allInsurances).map(([key, value], i) =>  {
     
     if( history.includes(key)){
       var pair= htr[key]=value
       htr= {...htr,pair }
     }
     if( insuranceVerufication.includes(key)){
      var pair= inVer[key]=value
      inVer= {...inVer,pair }
    }
    if( insuranceInformation.includes(key)){
      var pair= inInfo[key]=value
      inInfo= {...inInfo,pair }
    }
    if( breakdown.includes(key)){
      var pair= bDown[key]=value
      bDown= {...bDown,pair }
    }
    if( PatientInformation.includes(key)){
      var pair= pInfo[key]=value
      pInfo= {...pInfo,pair }
    }
      })
     
    }
    const objectOfInsurences= {
      PatientInformation:pInfo,
      insuranceInformation:inInfo,
      insuranceVerification:inVer,
      breakdown:bDown,
      history:htr
    }
    setInsurances(objectOfInsurences);
  
    
    

   
  },[props])
  console.log(devidedInsurances,"devidedInsurances")
  return (
    <div>
   
      <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            
          </Toolbar>
        </AppBar>
      {  props.allUsers? <AddEditUser props={props}/>:
      <div>
     {props.EditInsurance?<h1> Edit Insurance </h1>: <h1>Add Insurance</h1> }

     <h2> Patient Information: </h2>
     <div    className={classes.underline}></div>
      <AddEditInsurences allInsurances={props} 
      finalInsurenceToSend={finalInsurenceToSend}
      someInsurances = {devidedInsurances.PatientInformation} handleTextChange={handleTextChange}/> 
      
     <h2> Insurance Information: </h2>
     <div    className={classes.underline}></div>
      <AddEditInsurences allInsurances={props} 
      finalInsurenceToSend={finalInsurenceToSend}
      someInsurances = {devidedInsurances.insuranceInformation} handleTextChange={handleTextChange}/>

      <h2> Insurance Verification: </h2>
      <div    className={classes.underline}></div>
      <AddEditInsurences allInsurances={props} 
      finalInsurenceToSend={finalInsurenceToSend}
      someInsurances = {devidedInsurances.insuranceVerification} handleTextChange={handleTextChange}/>
     
      <h2> Breakdown: </h2>
      <div    className={classes.underline}></div>
      <AddEditInsurences allInsurances={props} 
      finalInsurenceToSend={finalInsurenceToSend}
      someInsurances = {devidedInsurances.breakdown} handleTextChange={handleTextChange}/>
    
      <h2> History: </h2>
      <div    className={classes.underline}></div>
      <AddEditInsurences allInsurances={props} 
      finalInsurenceToSend={finalInsurenceToSend}
      someInsurances = {devidedInsurances.history} handleTextChange={handleTextChange}/>
      
      </div>
      }
      </Dialog>
    </div>
  );
}