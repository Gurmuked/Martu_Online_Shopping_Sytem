const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="AgroLink" className="h-8" />
        <span className="text-green-700 font-bold text-xl">AgroLink Ethiopia</span>
      </div>

      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-green-700">Home</a></li>
        <li><a href="#marketplace" className="hover:text-green-700">Marketplace</a></li>
        <li><a href="#how" className="hover:text-green-700">How It Works</a></li>
        <li><a href="#about" className="hover:text-green-700">About</a></li>
      </ul>

      <div className="space-x-3">
        <button className="border border-green-700 text-green-700 px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white">
          Sign In
        </button>
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
