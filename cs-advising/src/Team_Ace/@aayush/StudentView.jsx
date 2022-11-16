import { DataGrid } from '@mui/x-data-grid';
import { GraduationEligibleGrid } from './GraduationEligibleGrid';

const columns = [
  {
    field: 'id',
    headerName: 'Course Code',
    sortable: false,
    width: 150
  },
  {
    field: 'name',
    headerName: 'Course Name',
    sortable: false,
    width: 400,
  },
  {
    field: 'credits',
    headerName: 'Credits',
    type: 'number',
    sortable: false,
    width: 100,
  },
];

const rows = [
  { id: 'CS 364', name: 'Data Structures and Algorithms', credits: 3 },
  { id: 'CS 494', name: 'Senior Project II', credits: 3 },
];

const studentDetails = [
  { id: '@12345678', name: 'John Doe', entryYear: '2019 Fall', cumGPA: 4.0, majorGPA: 4.0, numDs: 0, comments: 'Summa Cum Laude' },
];

export function StudentView({ student }) {
  return (
    <div>
      {student && (
        <div>
          <h1 style={{textAlign: 'center'}}>Congratulations! You are eligible for Graduation.</h1>
          <GraduationEligibleGrid rows={studentDetails} height={150}/>
        </div>
      )}
      <div>
        <h1 style={{textAlign: 'center'}}>Incomplete Credits for Graduation</h1>
        <h2>Courses not taken yet:</h2>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          style={{ height: 500, width: '55%', margin: 'auto' }}
        />
      </div>
    </div>
  );
}