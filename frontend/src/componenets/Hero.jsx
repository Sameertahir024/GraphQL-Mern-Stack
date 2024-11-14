import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" text-black ">
      <div className=" h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Manage Your Employees with Ease
        </h1>
        <p className="text-lg md:text-xl mb-8">
          A streamlined platform for adding, viewing, and managing your employee
          data all in one place.
        </p>
        <Link to="/add-employee">
          <button className="text-black  font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
            Add Employee
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
