import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../api/employeeApi";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [className, setClassName] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [attendance, setAttendance] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const employeeData = {
        name,
        age: parseInt(age),
        class: className,
        subjects,
        attendance: parseInt(attendance),
      };
      const addedEmployee = await addEmployee(employeeData);
      console.log(addEmployee);
      navigate(`/employee/${addedEmployee.id}`);
    } catch (error) {
      setError(`Failed to add employee.${error}`);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Employee</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleAddEmployee}>
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
          <label className="block text-gray-700">Age</label>
          <input
            type="number"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Class</label>
          <input
            type="text"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Subjects</label>
          <input
            type="text"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            value={subjects.join(", ")}
            onChange={(e) =>
              setSubjects(
                e.target.value.split(",").map((subject) => subject.trim())
              )
            }
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Attendance</label>
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
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
