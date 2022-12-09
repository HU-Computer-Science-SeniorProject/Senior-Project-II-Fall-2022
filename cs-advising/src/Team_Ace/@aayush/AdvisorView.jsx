import { GraduationEligibleGrid } from './GraduationEligibleGrid';

const rows = [
  { id: '@12345678', name: 'John Doe', entryYear: '2019 Fall', cumGPA: 4.0, majorGPA: 4.0, numDs: 0, comments: 'Summa Cum Laude' },
  { id: '@23456789', name: 'Doe Smith', entryYear: '2019 Spring', cumGPA: 3.15, majorGPA: 3.9, numDs: 0, comments: 'Summa Cum Laude' },
  { id: '@34567890', name: 'Carter Doe', entryYear: '2019 Fall', cumGPA: 3.2, majorGPA: 3.8, numDs: 0, comments: 'Summa Cum Laude' },
  { id: '@45678901', name: 'Maine Doe', entryYear: '2019 Spring', cumGPA: 3.8, majorGPA: 3.7, numDs: 0, comments: 'Summa Cum Laude' },
  { id: '@56789012', name: 'Carry Doe', entryYear: '2019 Fall', cumGPA: 3.75, majorGPA: 3.95, numDs: 0, comments: 'Summa Cum Laude' },
];

export function AdvisorView() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Students Eligible for Graduation</h1>
      <GraduationEligibleGrid rows={rows} height={500}/>
    </div>
  );
}