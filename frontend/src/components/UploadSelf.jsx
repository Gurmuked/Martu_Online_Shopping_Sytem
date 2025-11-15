import { useRef, useState } from "react";
import Webcam from "react-webcam";
import { CheckCircle } from "lucide-react";

export default function SelfieCapture() {
  const webcamRef = useRef(null);

  const [cameraOpen, setCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [continueEnabled, setContinueEnabled] = useState(false);

  const handleOpenCamera = () => {
    setCameraOpen(true);
    setCapturedImage(null);
    setContinueEnabled(false);
  };

  const handleCloseCamera = () => {
    setCameraOpen(false);
    setCapturedImage(null);
    setContinueEnabled(false);
  };

  const captureSelfie = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setContinueEnabled(true);
    setCameraOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-8">

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
          Take a Selfie
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Take a real-time selfie so we can confirm your identity.
        </p>

        {/* Camera or Preview */}
        <div className="bg-black rounded-xl p-4 flex justify-center mb-6 relative">
          {!cameraOpen && !capturedImage && (
            <div className="text-center text-gray-300 py-16">
              <p>Camera is off</p>
            </div>
          )}

          {cameraOpen && (
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="rounded-lg w-full"
            />
          )}

          {capturedImage && (
            <img
              src={capturedImage}
              alt="Captured selfie"
              className="rounded-lg w-full"
            />
          )}
        </div>

        {/* Camera Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          {!cameraOpen && !capturedImage && (
            <button
              onClick={handleOpenCamera}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Ready
            </button>
          )}

          {cameraOpen && (
            <>
              <button
                onClick={captureSelfie}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Capture Selfie
              </button>

              <button
                onClick={handleCloseCamera}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Close Camera
              </button>
            </>
          )}

          {capturedImage && (
            <button
              onClick={handleOpenCamera}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Retake
            </button>
          )}
        </div>

        {/* Tips Box */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-blue-700 mb-2">Tips for Best Results</h4>
          <ul className="space-y-1 text-sm text-blue-900">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" /> Look straight at the camera
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" /> Remove hats, sunglasses, or face coverings
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" /> Ensure good lighting
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" /> Keep your entire face inside the frame
            </li>
          </ul>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-4">
          <button className="text-gray-600 hover:underline">Back</button>

          <button
            disabled={!continueEnabled}
            className={`px-6 py-2 rounded-lg text-white 
              ${continueEnabled ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"}`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
