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
    <section id="challenges" className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        The Challenge We're Solving
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Ethiopian farmers face significant barriers in accessing fair and transparent markets.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {challenges.map((item, i) => (
          <div
            key={i}
            className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-green-800 text-lg mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengeSection;
