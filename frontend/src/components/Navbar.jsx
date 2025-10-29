import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src=".././src/assets/logo.jpg" alt="AgroLink" className="h-8 rounded-full bg-gray-500" />
        <span className="text-green-700 font-bold text-[18px]">AgroLink Ethiopia</span>
      </div>

      <ul className="hidden md:flex space-x-4 text-gray-700 font-medium">
        <li><Link to="/home" className="hover:text-green-700">Home</Link></li>
        <li><Link to="/marketplace" className="hover:text-green-700">Marketplace</Link></li>
        <li><Link to="/howitworks" className="hover:text-green-700">How It Works</Link></li>
        <li><Link to="/about" className="hover:text-green-700">About</Link></li>
      </ul>

      <div className="space-x-2">
        <Link to ="/loginregister">
        <button className="border border-green-600 text-green-700 px-3 py-1 rounded-lg hover:bg-green-700 hover:text-white">
          Sign In
        </button>
        </Link>
        <Link to ="/loginregister">
        <button className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-800">
          Get Started
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
