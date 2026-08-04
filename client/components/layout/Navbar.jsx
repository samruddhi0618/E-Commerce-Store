import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link to="/" className="text-2xl font-bold text-yellow-400">
                    ShopSphere
                </Link>

                <div className="flex gap-8">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/wishlist">Wishlist</Link>
                </div>

                <div className="flex items-center gap-6">
                    <Link to="/cart">
                        <FaShoppingCart size={22} />
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