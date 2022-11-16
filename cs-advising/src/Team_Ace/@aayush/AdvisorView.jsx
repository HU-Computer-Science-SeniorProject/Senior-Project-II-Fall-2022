import { GraduationEligibleGrid } from './GraduationEligibleGrid';

const rows = [
  { id: '@12345678', name: 'John Doe', entryYear: '2019 Fall', cumGPA: 4.0, majorGPA: 4.0, numDs: 0, comments: 'Summa Cum Laude' },
  { id: '@23456789', name: 'John Doe', entryYear: '2019 Spring', cumGPA: 3.85, majorGPA: 3.9, numDs: 0, comments: 'Summa Cum Laude' },
];

export function AdvisorView() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Students Eligible for Graduation</h1>
      <GraduationEligibleGrid rows={rows} height={500}/>
    </div>
  );
}