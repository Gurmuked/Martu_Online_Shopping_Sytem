const CTASection = () => {
  return (
    <section id="cta" className="py-6 px-6 mt-6 mb-6 md:px-20 text-center bg-green-700 text-white">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Transform Ethiopian Agriculture?
      </h2>
      <p className="text-green-100 mb-8 text-[14px] max-w-2xl mx-auto">
        Join thousands of farmers, traders, and shop owners building a fair and transparent agricultural marketplace.
      </p>
      <div className="space-x-4">
        <button className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">
          Register as Farmer
        </button>
        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
          Join as Trader
        </button>
      </div>
    </section>
  );
};

export default CTASection;
