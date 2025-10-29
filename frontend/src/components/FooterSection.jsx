const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-6">
        <div>
          <h3 className="text-white font-semibold mb- text-[14px] mb-6">AgroLink Ethiopia</h3>
          <p className="text-[12px] text-gray-300 cursor-pointer">
            Empowering Ethiopian farmers through secure digital marketplace technology.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb- text-[14px] mb-6">Platform</h4>
          <ul className="space-y-2 text-[12px] text-gray-300 cursor-pointer">
            <li>Marketplace</li>
            <li>How It Works</li>
            <li>Trust & Safety</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb- text-[14px] mb-6">Support</h4>
          <ul className="space-y-2 text-[12px] text-gray-300 cursor-pointer">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Training</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb- text-[14px] mb-6">Languages</h4>
          <ul className="space-y-2 text-[12px] text-gray-300 cursor-pointer">
            <li>English</li>
            <li>አማርኛ (Amharic)</li>
            <li>Afaan Oromo</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 text-[12px] border-t border-gray-700 pt-4">
        © 2025 AgroLink Ethiopia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
