import React from 'react';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import {
    Paper,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableRow,
  } from '@material-ui/core';
  import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
  import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';


const ReportTable = ({data, open}) => {

    const exportAsPdf = () => {
        var doc = new jsPDF();
        autoTable(doc, { html: '#tableReport' })
        doc.save('visitreport.pdf')
      };
  
    
      const renderTable = () => {
            return ( <Table id="tableReport">
              <TableBody>
                    <TableRow key={row.PatientID}>
                        <TableCell component="th" scope="row">
                          Patent Id
                        </TableCell>
                        <TableCell align="right">{row.PatientID}</TableCell>
                      </TableRow>
              </TableBody>
            </Table>);
      };
      
    return (
        <Dialog
        open={props.open}
        onClose={handleClose}
      >
          <div style={{ height: 40, float: 'right'}}>
          <PictureAsPdfIcon onClick={exportAsPdf}/>
          </div>
        <iframe id="ifmcontentstoprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>
        <TableContainer component={Paper} id="table-data-container">
        {renderTable}
        </TableContainer>
        </div>
    )
}

export default ReportTable