const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src=".././src/assets/logo.jpg" alt="AgroLink" className="h-8 rounded-full bg-gray-500" />
        <span className="text-green-700 font-bold text-[18px]">AgroLink Ethiopia</span>
      </div>

      <ul className="hidden md:flex space-x-4 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-green-700">Home</a></li>
        <li><a href="#marketplace" className="hover:text-green-700">Marketplace</a></li>
        <li><a href="#how" className="hover:text-green-700">How It Works</a></li>
        <li><a href="#about" className="hover:text-green-700">About</a></li>
      </ul>

      <div className="space-x-2">
        <button className="border border-green-600 text-green-700 px-3 py-1 rounded-lg hover:bg-green-700 hover:text-white">
          Sign In
        </button>
        <button className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-800">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
