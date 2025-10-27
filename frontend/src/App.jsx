import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ChallengeSection from "./components/ChallengeSection";
import FeaturesSection from "./components/FeaturesSection";
import BeneficiariesSection from "./components/BeneficiariesSection";
import HowItWorkSection from "./components/HowItWorkSection";
import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      <ChallengeSection />
      <FeaturesSection />
      <BeneficiariesSection />
      <HowItWorkSection />
      <CTASection />
      <BuyerDashboard />
      <SellerDashboard />
      <FooterSection />
      
    </div>
  );
}

export default App;
