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
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'InsuredName',
    label: 'InsuredDOB',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'InsuredSSN',
    label: 'InsuredSSN',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsuredID',
    label: 'InsuredID',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'GroupNumber',
    label: 'GroupNumber',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsuredEmployer',
    label: 'InsuredEmployer',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsCompanyNo',
    label: 'InsCompanyNo',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsCompany',
    label: 'InsCompany',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsCompAddress',
    label: 'InsCompAddress',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'InsRep',
    label: 'InsRep',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'RepNo',
    label: 'RepNo',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'RepNo',
    label: 'RepNo',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  
];

function createData(PatientID,GuestName,GuestDOB,InsuredName,InsuredDOB,InsuredSSN,InsuredID,GroupNumber,InsuredEmployer,InsCompanyNo,InsCompany,InsCompAddress,InsRep
  ) {
 
  return { PatientID,GuestName,GuestDOB,InsuredName,InsuredDOB,InsuredSSN,InsuredID,GroupNumber,InsuredEmployer,InsCompanyNo,InsCompany,InsCompAddress,InsRep
  };
}

// const rows = [
//   createData(1009, 'parvez', "25/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1008, 'dilip', "2/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1007, 'naushad', "3/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1006, 'dwight', "4/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1005, 'jim', "2/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1004, 'pam', "6/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1003, 'kavin', "23/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1002, 'stanly', "1/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1001, 'godra', "23/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1019, 'goku', "25/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1029, 'darthVador', "7/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1039, 'starlord', "21/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
//   createData(1049, 'stark', "9/09/1992", " naushad Hussain","05/12/1968",155668,115586,1566,"libarty",123, "libarty general isurence",'Dunder Mifflin Scranton office',"dilip" ),
 
// ];

const useStyles = makeStyles({
  root: {
    width: '94%',
    position:"relative",
    left:"3%",
    background:"rgba(0, 151, 19, 0.1)"
  },
  container: {
    maxHeight: "100%",
    
  },
  
  addIcon:{
    position:"fixed",
    bottom:"10%",
    left:"10%"
  }
});

export default function MainTable(props) {
  console.log(props,"props")
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
    "Notes": null,
    "VerifiedBy": null,
    "VerifiedDate": null,
    "Preventative": null,
    "SurgeryCoverage": null,
    "BasicFillings": null,
    "D6057": false,
    "D6104": false,
    "EndoRootCanals": null,
    "D6056": false,
    "D4263": false,
    "Periodontics": null,
    "D6061": false,
    "D4264": false,
    "OralSurgeryExtractions": null,
    "SurgExt": null,
    "SimpleExt": null,
    "Major": null,
    "D6065": false,
    "D4266": false,
    "CrownsD2740": null,
    "D6010": false,
    "D7951": false,
    "Bridges": null,
    "D7311": false,
    "D7952": false,
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
  });
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
        fontSize: 60,
         position:"fixed",
         top:"2%",
         left:"93%",
    }} color="primary" className={classes.addIcon}
    onClick={()=>handleClickOpen()}/>
    {isRowSelected?<FullScreenDialog open={open} handleClose={handleClose} allInsurances={selectedRow} EditInsurance={isRowSelected}/>:
    <FullScreenDialog open={open} handleClose={handleClose} allInsurances={emptyDataFields} EditInsurance={isRowSelected}/>}
    </Paper>
  );
}
