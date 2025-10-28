const BeneficiariesSection = () => {
  const users = [
    {
      title: "Farmers",
      desc: "Get direct market access, fair pricing, and verified buyers without middlemen.",
      stat: "30–50% increase in profit margins",
      img: ".././src/assets/farmer.jpg",
    },
    {
      title: "Market Traders",
      desc: "Expand your reach with trusted transactions and reliable supplier networks.",
      stat: "5× expanded market reach",
      img: ".././src/assets/trader.jpg",
    },
    {
      title: "Shop Owners",
      desc: "Access reliable agricultural suppliers and build trusted business relationships.",
      stat: "100% verified suppliers",
      img: ".././src/assets/shopowner.jpg",
    },
  ];

  return (
    <section id="beneficiaries" className="py-4 px-6 mt-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        Who Benefits from AgroLink
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl text-[14px] mx-auto">
        Connecting every part of Ethiopia’s agricultural value chain.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {users.map((user, i) => (
          <div key={i} className="rounded-xl shadow-lg overflow-hidden bg-green-50">
            <img src={user.img} alt={user.title} className="w-full h-36 object-cover" />
            <div className="py-[12px] px-4  text-left">
              <h3 className="font-semibold text-lg text-green-900 mb-2">{user.title}</h3>
              <p className="text-gray-700 text-[12px] mb-2">{user.desc}</p>
              <p className="font-semibold text-green-800 text-[12px]">{user.stat}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeneficiariesSection;
