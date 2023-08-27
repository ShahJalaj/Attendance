import React from 'react';
import '../styles/StudentCard.css'


const StudentCard = ({ student, markAttendance }) => {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Roll No: {student.rollNo}</p>
      <p>Attendance: {student.attendance ? 'Present' : 'Absent'}</p>
      <button onClick={() => markAttendance(student.id)}>
        Mark {student.attendance ? 'Absent' : 'Present'}
      </button>
    </div>
  );
};

export default StudentCard;
