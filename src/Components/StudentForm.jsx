import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function StudentForm({ studentList, setStudentList }) {
  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    isGraduated: false,
  });

  const [errors, setErrors] = useState({});

  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "isGraduated" ? e.target.checked : e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student Name is required";
    }

    if (!formData.age.trim()) {
      newErrors.age = "Student Age is required";
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
      newErrors.age = "Student Age must be a positive number";
    }

    return newErrors;
  };

  const addNewStudent = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setStudentList([...studentList, formData]);
    setFormData({
      studentName: "",
      age: "",
      isGraduated: false,
    });
    setErrors({});
  };

  return (
    <Form onSubmit={addNewStudent} className="magic-form">
      <Form.Group className="mb-3" controlId="formStudentName">
        <Form.Label>Student Name</Form.Label>
        <Form.Control
          value={formData.studentName}
          onChange={inputHandler}
          name="studentName"
          type="text"
          placeholder="Enter Student Name"
          isInvalid={!!errors.studentName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.studentName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formStudentAge">
        <Form.Label>Student Age</Form.Label>
        <Form.Control
          value={formData.age}
          onChange={inputHandler}
          name="age"
          type="text"
          placeholder="Enter Student Age"
          isInvalid={!!errors.age}
        />
        <Form.Control.Feedback type="invalid">
          {errors.age}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGraduated">
        <Form.Check
          value={formData.isGraduated}
          onChange={inputHandler}
          name="isGraduated"
          checked={formData.isGraduated}
          type="checkbox"
          label="Graduated"
        />
      </Form.Group>
      <Button variant="dark btn-magical" type="submit">
        Add New Student
      </Button>
    </Form>
  );
}
