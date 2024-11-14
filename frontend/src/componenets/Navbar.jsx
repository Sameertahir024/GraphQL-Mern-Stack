import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border bg-white border-black rounded-full m-3 py-3 px-10 shadow-lg sticky top-3">
      <div className="container mx-auto text-black flex justify-between items-center">
        <h1 className="text-xl font-semibold">Employee Management</h1>
        <div className="space-x-10">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/add-employee" className="">
            Add Employee
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
