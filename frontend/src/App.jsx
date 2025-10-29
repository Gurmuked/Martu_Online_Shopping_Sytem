import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import Homepage from "./components/Homepage";
import LoginRegister from "./components/LoginAndSignup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
