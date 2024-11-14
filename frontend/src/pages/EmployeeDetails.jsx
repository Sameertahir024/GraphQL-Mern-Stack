// src/pages/EmployeeDetail.js
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchEmployee } from "../api/employeeApi";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        const employeeData = await fetchEmployee(id);
        setEmployee(employeeData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    loadEmployee();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-black text-white rounded-md mb-4"
      >
        Back to List
      </button>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">{employee.name}</h1>
        <p className="mt-2">Class: {employee.class}</p>
        <p>Age: {employee.age}</p>
        <p>Subjects: {employee.subjects.join(", ")}</p>
        <p>Attendance: {employee.attendance}</p>
      </div>
    </div>
  );
};

export default EmployeeDetail;
