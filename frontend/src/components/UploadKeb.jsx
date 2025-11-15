import { useState } from "react";
import { FileText, IdCard } from "lucide-react";

export default function AdditionalDocumentUpload() {
  const [selected, setSelected] = useState(null);

  const documentTypes = [
    {
      id: "kebele",
      title: "Kebele ID",
      subtitle: "Government issued ID",
      icon: <IdCard size={32} className="text-blue-600" />
    },
    {
      id: "bank",
      title: "Bank Statement",
      subtitle: "Recent bank document",
      icon: <FileText size={32} className="text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">

        {/* Progress header */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Step 2 of 3</span>
            <span>66% Complete</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "66%" }}></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900">
          Upload Additional Verification Document
        </h2>

        <p className="text-gray-600 mt-2 mb-6">
          Choose and upload one supporting document: Kebele ID or a recent Bank Statement.
        </p>

        {/* Document Type Selector */}
        <h3 className="text-gray-800 font-medium mb-3">Select Document Type</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {documentTypes.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setSelected(doc.id)}
              className={`cursor-pointer border rounded-xl p-6 flex flex-col items-center text-center transition
                ${selected === doc.id ? "border-blue-600 shadow-md" : "border-gray-300 hover:border-blue-400"}`}
            >
              <div className="mb-4">{doc.icon}</div>
              <h4 className="font-semibold text-gray-800">{doc.title}</h4>
              <p className="text-gray-500 text-sm mt-1">{doc.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <button className="text-gray-600 hover:underline">Back</button>

          <button
            disabled={!selected}
            className={`px-6 py-2 rounded-lg text-white font-medium
              ${selected ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"}`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
