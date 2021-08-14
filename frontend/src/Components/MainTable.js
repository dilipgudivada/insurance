import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FullScreenDialog from './FullScreenDialog';

const columns = [
  { id: 'PatientID', label: 'PatientID', minWidth: 170 },
  { id: 'GuestName', label: 'GuestName', minWidth: 100 },
  {
    id: 'GuestDOB',
    label: 'GuestDOB',
    
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'InsuredName',
    label: 'InsuredDOB',
    
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'InsuredSSN',
    label: 'InsuredSSN',
    
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsuredID',
    label: 'InsuredID',
    
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'GroupNumber',
    label: 'GroupNumber',
    
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsuredEmployer',
    label: 'InsuredEmployer',
    
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsCompanyNo',
    label: 'InsCompanyNo',
    
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsCompany',
    label: 'InsCompany',
    
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsCompAddress',
    label: 'InsCompAddress',
    
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsRep',
    label: 'InsRep',
    
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'RepNo',
    label: 'RepNo',
    
    align: 'left',
    format: (value) => value.toFixed(2),
  },

  
];

function createData(PatientID,GuestName,GuestDOB,InsuredName,InsuredDOB,InsuredSSN,InsuredID,GroupNumber,InsuredEmployer,InsCompanyNo,InsCompany,InsCompAddress,InsRep
  ) {
 
  return { PatientID,GuestName,GuestDOB,InsuredName,InsuredDOB,InsuredSSN,InsuredID,GroupNumber,InsuredEmployer,InsCompanyNo,InsCompany,InsCompAddress,InsRep
  };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 500,
  },
  container: {
    maxHeight: "100%",
  },
});

export default function MainTable(props) {

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [isRowSelected, setisRowSelected] = React.useState(false);
  const [emptyDataFields, setemptyDataFields] = React.useState({
    "PatientID": null,
    "GuestName": null,
    "GuestDOB": null,
    "InsuredName": null,
    "InsuredDOB": null,
    "InsuredSSN": null,
    "InsuredID": null,
    "GroupNumber": null,
    "Preventative": null,
    "SurgeryCoverage": null,
    "BasicFillings": null,
    "InsuredEmployer": null,
    "InsCompanyNo": null,
    "InsCompany": null,
    "InsCompAddress": null,
    "InsRep": null,
    "RepNo": null,
    "FeeSchedule": null,
    "FamilyCoverage": null,
    "EffectiveDate": null,
    "PayorId": null,
    "CalendarFiscalDates": null,
    "YearlyMax": null,
    "BenefitsUsed": null,
    "IndDed": null,
    "FamDed": null,
    "DeductibleMet": null,
    "MissTthClause": null,
    "WaitingPeriod": null,
    "HowLong": null,
    "ReplacementPeriod": null,
    "ProstheticPay": null,
    "DowngradeComposites": null,
    "DowngradeCrowns": null,
    "OrthoCoveragePercentage": null,
    "LifeTimeMax": null,
    "OrthoDed": null,
    "HasDedBeenMet": null,
    "AgeLimit": null,
    "OrthoPaidBy": null,
    "WorkInProgress": null,
    "BandingIntialPymt": null,
    "D6057": null,
    "Notes": null,
    "VerifiedBy": null,
    "VerifiedDate": null,
    "D6104": null,
    "EndoRootCanals": null,
    "D6056": null,
    "D4263": null,
    "Periodontics": null,
    "D6061": null,
    "D4264": null,
    "OralSurgeryExtractions": null,
    "SurgExt": null,
    "SimpleExt": null,
    "Major": null,
    "D6065": null,
    "D4266": null,
    "CrownsD2740": null,
    "D6010": null,
    "D7951": null,
    "Bridges": null,
    "D7311": null,
    "D7952": null,
    "Denbures": null,
    "FileOralSurg": null,
    "ImplantsD6058": null,
    "D1351Sealants": false,
    "D1351Freq": null,
    "D1351Age": null,
    "D1351ToothRestrictions": null,
    "D1510SpaceMint": false,
    "D1510Freq": null,
    "D1510Age": null,
    "D1208Flouride": false,
    "D1208Freq": null,
    "D1208Age": null,
    "D0150Exam": false,
    "D0150Freq": null,
    "D0150LastDos": null,
    "D1110Prophy": false,
    "D1110Freq": null,
    "D1110LastDos": null,
    "D0274BiteWings": false,
    "D0274Freq": null,
    "D0274LastDos": null,
    "D0330Pano": false,
    "D0330Freq": null,
    "D0330LastDos": null,
    "D0220PAS": false,
    "D0220Freq": null,
    "D0220LastDos": null,
    "Xrays": null,
    "D0140SDTXAllowed": null,
    "DoYouHaveToWait90Days": null,
    "CanD3481BePerformedSameDay": null,
    "D4381ArestinPerioChip": null,
    "QuadsDoneOnSameDay": null,
    "SitesDoneOnSameDay": null,
    "WhatAreThePocketDepthRequirements": null,
    "D9944NightGuard": false,
    "D9944NightFreq": null,
    "D9944NightLastDOS": null,
    "D9944CoveredFor": null,
    "D4341ScalingRootPlan": false,
    "D4341ScalingRootPlanFreq": null,
    "D4341ScalingRootPlanQuardsperDays": null,
    "D4341ScalingRootPlanLastDos": null,
    "D4355FullMonth": false,
    "D4355FullMonthFreq": null,
    "D4355FullMonthPocketDeptForSap": null,
    "D4355FullMonthLastDos": null,
    "D4910PerioMaint": false,
    "D4910PerioMaintFreq": null,
    "D4910PerioMaintAddEither": null,
    "D4910PerioMaintLastDos": null,
    "DropDownValues": null
  }
);
  const [selectedRow, setselectedRow] = React.useState({});
  const rows = props.allInsurances.allInsurances
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
 
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const handleClickOpen = () => {  
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setselectedRow({});
    setisRowSelected(false);
    props.setUpdatePage(!props.updatePage)
  };
  const onRowClcik=(row)=>{

    setselectedRow(row);
    setOpen(true);
    setisRowSelected(true);
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={()=>onRowClcik(row)}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <AddCircleIcon style={{ 
        fontSize: 50,
         position:"fixed",
         bottom:"10%",
         left:"93%",
         color:"#3f9fb5"
    }}  
    onClick={()=>handleClickOpen()}/>
    {isRowSelected?<FullScreenDialog open={open} handleClose={handleClose} allInsurances={selectedRow} EditInsurance={isRowSelected}/>:
    <FullScreenDialog open={open} handleClose={handleClose} allInsurances={emptyDataFields} EditInsurance={isRowSelected}/>}
    </Paper>
  );
}
