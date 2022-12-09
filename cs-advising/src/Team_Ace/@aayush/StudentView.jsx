import { DataGrid } from '@mui/x-data-grid';
import { GraduationEligibleGrid } from './GraduationEligibleGrid';
import { useState } from 'react';
import { Button, Grid } from '@mui/material';

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
  { id: 'CS 354', name: 'Computer Science III', credits: 3 },
  { id: 'CS 135', name: 'Computer Science I', credits: 4 },
];

const studentDetails = [
  { id: '@12345678', name: 'John Doe', entryYear: '2019 Fall', cumGPA: 4.0, majorGPA: 4.0, numDs: 0, comments: 'Summa Cum Laude' },
];

export function StudentView({ student }) {
  const [eligibleForGraduation, setEligibleForGraduation] = useState(true);
  return (
    <div>
      <button onClick={() => setEligibleForGraduation(!eligibleForGraduation)}>
        {eligibleForGraduation ? 'See Ineligible View' : 'See Eligible View'}
      </button>
      {eligibleForGraduation ? 
      (
        <div style={{textAlign: 'center'}}>
          <h1 style={{ marginBottom: '20px'}}>Congratulations! You are eligible for Graduation.</h1>
          <GraduationEligibleGrid rows={studentDetails} height={175}/>
          <Button href="/graduation-application" variant="contained" style={{margin: 'auto', marginTop: '20px', alignContent: 'center'}} >Apply for Graduation</Button>
        </div>
      ) : (
        <div style={{textAlign: 'center'}}>
        <h1 style={{marginBottom: '20px'}}>Incomplete Credits/Courses for Graduation</h1>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          style={{ height: 325, width: '55%', margin: 'auto' }}
        />
      </div>
      )
    }
    </div>
  );
}