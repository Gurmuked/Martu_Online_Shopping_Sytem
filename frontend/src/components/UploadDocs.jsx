import axios from 'axios';
import { useState } from 'react';

export default function UploadDocs({ userId }) {
  const [file, setFile] = useState(null);
  async function upload(type) {
    if (!file) return alert('choose file');
    const fd = new FormData();
    fd.append('file', file);
    fd.append('userId', userId);
    const res = await axios.post(`/api/upload/${type}`, fd);
    if (res.data.ok) alert('Uploaded');
  }

  return (
    <div>
      <input type="file" onChange={e=>setFile(e.target.files[0])} />
      <div className="space-x-2">
        <button onClick={()=>upload('id')}>National ID</button>
        <button onClick={()=>upload('kebele')}>Kebele ID</button>
        <button onClick={()=>upload('selfie')}>Selfie</button>
      </div>
    </div>
  );
}
