import ChallengeSection from './ChallengeSection';
import {Link} from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
    <section id="home" className="pt-16 h-[100vh] px-8 md:px-20 bg-green-50 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-6 mr-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Secure Digital Marketplace for{" "}
          <span className="text-green-700">Ethiopian Farmers</span>
        </h1>
        <p className="text-gray-600 text-[14px]">
          Connect farmers, shop owners, and market traders through safe, transparent, and traceable agricultural trade with verified users and escrow payments.
        </p>
        <div className="flex space-x-6">
          <Link to="/Register">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800">
            Start Trading
          </button>
          </Link>
          <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-lg hover:border-green-700 hover:text-green-700">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="w-full h-[90%] md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src=".././src/assets/agrohero.jpg"
            alt="Farmers"
            className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
          />
      </div>
    </section>
    <ChallengeSection />
    </>
  );
};

export default HeroSection;
