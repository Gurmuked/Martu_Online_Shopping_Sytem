import axios from 'axios';
import { useState } from 'react';

const Register = ()=> {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState('form'); // form | otp

  const handleRegister = async () => {
    const res = await axios.post('/api/auth/register', { phone, password });
    if (res.data.ok) {
      await axios.post('/api/auth/send-otp', { phone });
      setStep('otp');
    }
  };

  const verifyOtp = async (code) => {
    const res = await axios.post('/api/auth/verify-otp', { phone, code });
    if (res.data.ok) {
      // redirect to dashboard or profile
    }
  };

  return (
    <div>
      {step === 'form' ? (
        <>
          <input value={phone} onChange={e=>setPhone(e.target.value)} className='border-[2px] border-black'/>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button onClick={handleRegister}>Register</button>
        </>
      ) : (
        <>
          <OtpInput onConfirm={verifyOtp} />
        </>
      )}
    </div>
  );
}

export default Register;