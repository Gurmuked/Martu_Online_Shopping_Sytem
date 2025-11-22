import { Upload } from 'lucide-react';
import UploadDocs from '../components/Verification/UploadDocs.jsx'
import UploadKeb from '../components/Verification/UploadKeb.jsx'
import UploadSelf from '../components/Verification/UploadSelf.jsx'

const Services = () => {
  return (
    <div className='pt-16 w-full'>
          <UploadDocs />
          <UploadKeb />
          <UploadSelf />
    </div>
  )
}
export default Services;