import { DataGrid } from '@mui/x-data-grid';

const gpaFormatter = ({ value }) => {
  return value.toFixed(2);
};

const columns = [
  {
    field: 'id',
    headerName: 'Student ID',
    sortable: false,
    width: 150
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'entryYear',
    headerName: 'Entry Year',
    width: 150,
  },
  {
    field: 'cumGPA',
    headerName: 'Cum GPA',
    type: 'number',
    valueFormatter: gpaFormatter,
    width: 100,
  },
  {
    field: 'majorGPA',
    headerName: 'Major GPA',
    type: 'number',
    valueFormatter: gpaFormatter,
    width: 100,
  },
  {
    field: 'numDs',
    headerName: 'No. of Ds',
    type: 'number',
    width: 100,
  },
  {
    field: 'comments',
    headerName: 'Comments',
    sortable: false,
    width: 200,
  },
];

export function GraduationEligibleGrid({ rows, height }) {
  return (
    <div style={{textAlign: 'center'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        style={{ height: height, width: '75%', margin: 'auto'}}
      />
    </div>
  );
}