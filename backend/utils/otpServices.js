const twilio = require('twilio');
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSms = async (phone, message) => {
  return client.messages.create({
    body: message,
    from: process.env.TWILIO_NUMBER,
    to: phone
  });
};

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

module.exports = { sendSms, generateOtp };
