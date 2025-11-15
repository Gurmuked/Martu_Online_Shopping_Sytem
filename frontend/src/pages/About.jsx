import BuyerDashboard from '../pages/BuyerDashboard.jsx'
import SellerDashboard from '../pages/SellerDashboard.jsx'
import Admin from './AdminDashboard.jsx'

const About = () => {
  return (
    <div className="py-16">
     <BuyerDashboard />
     <SellerDashboard />
     <Admin/>
    </div>
  )
}
export default About;