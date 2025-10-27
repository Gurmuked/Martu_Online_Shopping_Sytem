const ProductCard = ({ product }) => (
  <div className="border rounded-lg p-3 hover:shadow-lg transition">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-32 object-cover rounded-md"
    />
    <h4 className="font-semibold mt-2 text-sm">{product.name}</h4>
    <p className="text-gray-600 text-xs">{product.seller}</p>
    <div className="flex justify-between items-center mt-2">
      <p className="font-semibold">${product.price}</p>
      <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-md hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductCard;
