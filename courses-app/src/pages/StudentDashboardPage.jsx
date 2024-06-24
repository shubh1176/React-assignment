import React from 'react';
import { useSelector } from 'react-redux';
import StudentDashboard from '../components/StudentDashboard';

const StudentDashboardPage = () => {
  const students = useSelector(state => state.students.items);

  return (
    <div>
      <h1>Student Dashboard</h1>
      {students.map(student => (
        <StudentDashboard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentDashboardPage;
