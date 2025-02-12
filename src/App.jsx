import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { StudentForm } from "./Components/StudentForm";
import { StudentTable } from "./Components/StudentTable";
import "./magicStyles.css";
import Products from "./Components/Products";
function App() {
  const [studentList, setStudentList] = useState([]);

  const deleteStudent = (index) => {
    const newStudentList = studentList.filter((_, i) => i !== index);
    setStudentList(newStudentList);
  };

  return (
    <div className="container mt-5">
      <Products />
      <StudentForm studentList={studentList} setStudentList={setStudentList} />
      <StudentTable studentList={studentList} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;
