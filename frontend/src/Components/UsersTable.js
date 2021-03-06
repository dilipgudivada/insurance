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

const  roles = [{id: 1, roleName: "Administrator"}, {id:2, roleName: "Dental Office Person"}, { id: 3, roleName: 'Agent'}];


function roleName(value) {
  let results = [];
  roles.forEach((item) => {
    if(item.id.toString() === value.toString()) {
       results.push(<div>{item.roleName}</div>);
    }
  });
  return results;
}
const columns = [
  { id: 'UserId', label: 'UserId', align: 'left' },
  {
    id: 'FirstName',
    label: 'FirstName',
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'LastName',
    label: 'LastName',
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'MobileNumber',
    label: 'MobileNumber',
    align: 'left',
    format: (value) => value,
  },
  {
    id: 'EmailAddress',
    label: 'EmailAddress',
    align: 'left',
    format: (value) => value,
  },
  {
    id: 'Gender',
    label: 'Gender',
    align: 'left',
    format: (value) => value,
  },
  {
    id: 'RoleId',
    label: 'Role',
    align: 'left',
    format: (value) => {return <div>{roleName(value)}</div>},
  }
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 500,
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
  const emptyDataFields = {  
      "UserId": null,
      "FirstName": null,
      "LastName": null,
      "Password": null,
      "MobileNumber": null,
      "EmailAddress": null,
      "Gender": null,
      "DOB": null,
      "RoleId": null,
      "LocationId": null,
      "City": null,
      "Country": null,
    };
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
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
          
        </Table>
        <TablePagination
        style={{ position: 'relative', bottom : 0}}
        rowsnPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </TableContainer>
    
      <AddCircleIcon style={{ 
        fontSize: 50,
         position:"fixed",
    bottom:"10%",
    left:"93%",
    color:"#3f9fb5"
    }}
    onClick={()=>handleClickOpen()}/>
    {isRowSelected?<FullScreenDialog open={open} handleClose={handleClose} allUsers={selectedRow} EditUser= {isRowSelected}/>:
    <FullScreenDialog open={open} handleClose={handleClose} allUsers={emptyDataFields} EditUser ={isRowSelected} locations={props.locations}/>}
    
    </Paper>
  );
}
