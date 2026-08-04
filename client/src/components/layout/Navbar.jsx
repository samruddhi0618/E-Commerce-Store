import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

function Navbar() {
    const { cartItems } = useCart();

    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <Link
                    to="/"
                    className="text-2xl font-bold text-yellow-400"
                >
                    ShopSphere
                </Link>

                <div className="flex gap-8">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/wishlist">Wishlist</Link>
                </div>

                <div className="flex items-center gap-6">

                    <Link
                        to="/cart"
                        className="relative"
                    >
                        <FaShoppingCart size={22} />

                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    <Link to="/profile">
                        <FaUserCircle size={24} />
                    </Link>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;