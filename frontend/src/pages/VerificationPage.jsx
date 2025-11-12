import React, { useState } from "react";
import axios from "axios";

export default function VerificationPage({ userId }) {
  const [loading, setLoading] = useState(false);

  const handleRequestVerification = async () => {
    try {
      setLoading(true);
      await axios.post(`/api/verification/request/${userId}`);
      alert("Request sent. Admin will review.");
    } catch (err) {
      alert("Error sending verification request");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4">Identity Verification</h1>
      <p className="text-gray-600 mb-4">
        Please complete your profile verification by submitting required
        documents.
      </p>

      <button
        onClick={handleRequestVerification}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        {loading ? "Sending..." : "Request Verification"}
      </button>
    </div>
  );
}
