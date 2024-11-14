import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import EmployeeList from "./pages/EmployeeList";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
        <Route path="/" element={<EmployeeList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
