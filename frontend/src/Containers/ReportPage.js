import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const ReportPage = ({ allInsurances }) => {
  const columns = [
    {
      dataField: "PatientID",
      text: "Patient Id",
    },
  ];

  const data = allInsurances?.allInsurances?.length
    ? allInsurances?.allInsurances
    : [];
  
  const indication = () => {
    return <div>No Records</div>
  }
  return (
    <div style={{ backgroundColor: "white" }}>
      <BootstrapTable
        keyField="PatientID"
        columns={columns}
        data={data}
        striped
        hover
        condensed
        noDataIndication={ indication }
      />
    </div>
  );
};

export default ReportPage;
