import FeaturesSection from './FeaturesSection';

const ChallengeSection = () => {
  const challenges = [
    {
      title: "Middlemen Exploitation",
      desc: "Farmers lose 30–50% of profits to intermediaries.",
    },
    {
      title: "No Secure Platform",
      desc: "Lack of verified users and safe payment systems.",
    },
    {
      title: "Price Opacity",
      desc: "Limited transparency in pricing and market info.",
    },
    {
      title: "Trust Issues",
      desc: "Fear of fraud prevents digital adoption.",
    },
  ];

  return (
    <>
    <section id="challenges" className="py-4 px-6 mt-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        The Challenge We're Solving
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl text-[14px] mx-auto">
        Ethiopian farmers face significant barriers in accessing fair and transparent markets.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {challenges.map((item, i) => (
          <div
            key={i}
            className="bg-green-50 py-8 px-2 rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-green-900 text-lg mb-6">
              {item.title}
            </h3>
            <p className="text-gray-700 text-[14px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <FeaturesSection />
    </>
  );
};

export default ChallengeSection;
