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
  { id: 'UserId', label: 'UserId', minWidth: 170 },
  {
    id: 'FirstName',
    label: 'FirstName',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'LastName',
    label: 'LastName',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'MobileNumber',
    label: 'MobileNumber',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'EmailAddress',
    label: 'EmailAddress',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Gender',
    label: 'Gender',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Age',
    label: 'Age',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Role',
    label: 'Role',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  }
  
];

function createData(UserId, FirstName, LastName,MobileNumber,EmailAddress,Gender,Age,Role) {
  
  return {UserId, FirstName, LastName,MobileNumber,EmailAddress,Gender,Age,Role};
}

// const rows = [
//   createData('parver', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('dilip', 'kumar', 'ji', 3287263,'parvez.mail@gmail.com','male',29,'Faculty'),
//   createData('dilp123', 'dil', 'ip', 3287263,'parvez.mail@gmail.com','male',29,'Doctor'),
//   createData('vinay', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('noor', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('parver', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('parver', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('parver', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('parver', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('parver', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('parver', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('parver', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('parver', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('parver', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
//   createData('parver', 'parvez', 'Hussain', 3287263,'parvez.mail@gmail.com','male',29,'Admin'),
  
  
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
});

export default function UsersTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [isRowSelected, setisRowSelected] = React.useState(false);
  const [selectedRow, setselectedRow] = React.useState({});
  const [emptyDataFields, setemptyDataFields] = React.useState({
    
      "UserId": null,
      "FirstName": null,
      "LastName": null,
      "Password": null,
      "MobileNumber": null,
      "EmailAddress": null,
      "Gender": null,
      "DOB": null,
      "RoleId": null
    })
  const handleClickOpen = () => {
 
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setselectedRow({})
    setisRowSelected(false);
    props.setUpdatePage(!props.updatePage)
  };
 
  const rows = props.allUsers.allUsers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
const onRowClcik=(row)=>{

  setselectedRow(row)
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
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={()=>onRowClcik(row)} >
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
    {isRowSelected?<FullScreenDialog open={open} handleClose={handleClose} allUsers={selectedRow} EditUser= {isRowSelected}/>:
    <FullScreenDialog open={open} handleClose={handleClose} allUsers={emptyDataFields} EditUser ={isRowSelected}/>}
    
    </Paper>
  );
}
