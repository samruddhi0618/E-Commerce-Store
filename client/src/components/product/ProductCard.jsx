import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <Link to={`/product/${product.id}`}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition duration-300">

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                />

                <div className="p-4">

                    <h2 className="text-xl font-semibold">
                        {product.name}
                    </h2>

                    <div className="flex items-center gap-2 mt-2 text-yellow-500">
                        <FaStar />
                        <span>{product.rating}</span>
                    </div>

                    <h3 className="text-2xl font-bold mt-3">
                        ₹ {product.price.toLocaleString()}
                    </h3>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>
        </Link>
    );
}

export default ProductCard;