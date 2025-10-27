const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        <div>
          <h3 className="text-white font-semibold mb-3">AgroLink Ethiopia</h3>
          <p className="text-sm">
            Empowering Ethiopian farmers through secure digital marketplace technology.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li>Marketplace</li>
            <li>How It Works</li>
            <li>Trust & Safety</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Training</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Languages</h4>
          <ul className="space-y-2 text-sm">
            <li>English</li>
            <li>አማርኛ (Amharic)</li>
            <li>Afaan Oromo</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © 2025 AgroLink Ethiopia. All rights reserved. Supporting SDGs 1, 2, and 8.
      </div>
    </footer>
  );
};

export default Footer;
