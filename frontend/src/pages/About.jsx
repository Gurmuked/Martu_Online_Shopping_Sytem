import BuyerDashboard from '../pages/BuyerDashboard.jsx'
import SellerDashboard from '../pages/SellerDashboard.jsx'
import UploadDocs from '../components/UploadDocs.jsx'

const About = () => {
  return (
    <div className="py-16">
     <BuyerDashboard />
     <SellerDashboard />
     <UploadDocs />
    </div>
  )
}
export default About;