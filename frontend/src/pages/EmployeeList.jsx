import { useState, useEffect } from "react";
import { deleteEmployee, fetchEmployees } from "../api/employeeApi";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loadEmployees = async () => {
    try {
      const employeesData = await fetchEmployees(20);
      setEmployees(employeesData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    loadEmployees();
  }, []);

  const navigations = (id) => {
    navigate(`/employee/${id}`);
  };
  const editUser = (id) => {
    navigate(`/update-employee/${id}`);
  };
  const handleDelete = async (id) => {
    try {
      const response = await deleteEmployee(id);
      loadEmployees();
      if (response.success) {
        alert(response.message);
      } else {
        alert("Failed to delete employee");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="uppercase font-bold text-3xl text-center p-6">
        all employee{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-8">
        {employees?.map((employee) => (
          <div
            className="cursor-pointer border border-black p-4 rounded-lg shadow-md"
            key={employee.id}
          >
            <h3 className="font-bold text-2xl">{employee.name}</h3>

            <p>{employee.class}</p>
            <p>Age: {employee.age}</p>
            <p>Subjects: {employee.subjects.join(", ")}</p>
            <h1
              onClick={() => {
                navigations(employee.id);
              }}
            >
              see more
            </h1>
            <button
              onClick={() => {
                editUser(employee.id);
              }}
              className="mt-2 px-4 py-2 bg-black text-white rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDelete(employee.id);
              }}
              className="mt-2 ml-2 px-4 py-2 bg-black text-white rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
