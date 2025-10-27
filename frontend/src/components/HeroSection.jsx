const HeroSection = () => {
  return (
    <section id="home" className="pt-28 px-8 md:px-20 bg-green-50 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Secure Digital Marketplace for{" "}
          <span className="text-green-700">Ethiopian Farmers</span>
        </h1>
        <p className="text-gray-600">
          Connect farmers, shop owners, and market traders through safe, transparent, and traceable agricultural trade with verified users and escrow payments.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
            Start Trading
          </button>
          <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:border-green-700 hover:text-green-700">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="/farmer.jpg" alt="Farmers" className="rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default HeroSection;
