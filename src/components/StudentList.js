import React, { useState } from 'react';
import StudentCard from './StudentCard';
import '../styles/StudentList.css'

const initialStudents = [
    { id: 1, name: 'Krish', rollNo: '101', attendance: false },
    { id: 2, name: 'Jay', rollNo: '102', attendance: true },
    { id: 3, name: 'Rahul', rollNo: '103', attendance: false },
    { id: 4, name: 'Preya', rollNo: '104', attendance: true },
    { id: 5, name: 'Sam', rollNo: '105', attendance: false },
    { id: 6, name: 'Vedang', rollNo: '106', attendance: true },
    { id: 7, name: 'Parth', rollNo: '107', attendance: false },
    { id: 8, name: 'Sanaskar', rollNo: '108', attendance: true },
    { id: 9, name: 'Chhavi', rollNo: '109', attendance: false },
    { id: 10, name: 'Raghav', rollNo: '110', attendance: true },
    { id: 11, name: 'Anushree', rollNo: '111', attendance: true },
  // ... more students
];

const StudentList = () => {
  const [students, setStudents] = useState(initialStudents);

  const markAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, attendance: !student.attendance } : student
      )
    );
  };

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} markAttendance={markAttendance} />
      ))}
    </div>
  );
};

export default StudentList;
