const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Register & Verify",
      desc: "Sign up with phone verification and upload your National ID for trusted status.",
    },
    {
      number: 2,
      title: "List or Browse",
      desc: "Farmers list products, and traders or shop owners browse verified listings.",
    },
    {
      number: 3,
      title: "Secure Payment",
      desc: "Payment held in escrow until goods are delivered and confirmed.",
    },
    {
      number: 4,
      title: "Complete Trade",
      desc: "Delivery confirmed, payment released, and digital receipt generated.",
    },
  ];

  return (
    <section id="how" className="py-4 px-6 mt-6 md:px-20 bg-green-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">How AgroLink Works</h2>
      <p className="text-gray-600 mb-10 max-w-2xl text-[14px] mx-auto">
        Simple, secure, and transparent trading process.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white py-8 px-2 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-green-700 text-white rounded-full mx-auto mb-4 text-lg font-bold">
              {step.number}
            </div>
            <h3 className="font-semibold text-green-900 mb-2">{step.title}</h3>
            <p className="text-gray-700 text-[12px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
