import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEmployee } from "../api/employeeApi";
import { updateEmployee } from "../api/employeeApi";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [className, setClassName] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [attendance, setAttendance] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        const employeeData = await fetchEmployee(id);
        setEmployee(employeeData);
        setName(employeeData.name);
        setAge(employeeData.age);
        setClassName(employeeData.class);
        setSubjects(employeeData.subjects);
        setAttendance(employeeData.attendance);
      } catch (error) {
        setError(`Failed to load employee details.${error}`);
      }
    };

    loadEmployee();
  }, [id]);

  const handleUpdateEmployee = async (e) => {
    e.preventDefault();
    try {
      const employeeData = {
        id,
        name,
        age: parseInt(age),
        class: className,
        subjects,
        attendance: parseInt(attendance),
      };
      const updatedEmployee = await updateEmployee(employeeData);
      navigate(`/employee/${updatedEmployee.id}`);
    } catch (error) {
      setError(`Failed to load employee details.${error}`);
    }
  };

  if (!employee) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Update Employee</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleUpdateEmployee}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">age</label>
          <input
            type="number"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">className</label>
          <input
            type="text"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">subjects</label>
          <input
            type="text"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={subjects}
            onChange={(e) => setSubjects(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">attendance</label>
          <input
            type="number"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md"
        >
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
