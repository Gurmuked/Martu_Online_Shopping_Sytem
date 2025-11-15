import { Upload } from 'lucide-react';
import UploadDocs from '../components/UploadDocs.jsx'
import UploadKeb from '../components/UploadKeb.jsx'
import UploadSelf from '../components/UploadSelf.jsx'

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