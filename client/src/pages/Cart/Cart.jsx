import Layout from "../../components/layout/Layout";
import { useCart } from "../../context/CartContext";

function Cart() {
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <Layout>
            <div className="max-w-6xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold mb-8">
                    Shopping Cart
                </h1>

                {cartItems.length === 0 ? (
                    <h2 className="text-xl">
                        Your cart is empty.
                    </h2>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-white shadow rounded-lg p-4 mb-5"
                            >
                                <div className="flex items-center gap-5">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-28 h-28 rounded object-cover"
                                    />

                                    <div>

                                        <h2 className="text-2xl font-semibold">
                                            {item.name}
                                        </h2>

                                        <p className="mt-2">
                                            ₹ {item.price.toLocaleString()}
                                        </p>

                                        <div className="flex items-center gap-4 mt-4">

                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                className="bg-gray-200 px-3 py-1 rounded"
                                            >
                                                -
                                            </button>

                                            <span className="font-bold">
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                className="bg-gray-200 px-3 py-1 rounded"
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                </div>

                                <button
                                    onClick={() =>
                                        removeFromCart(item.id)
                                    }
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                >
                                    Remove
                                </button>

                            </div>
                        ))}

                        <div className="text-right mt-10">

                            <h2 className="text-3xl font-bold">
                                Total : ₹ {total.toLocaleString()}
                            </h2>

                            <button className="mt-5 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
                                Proceed to Checkout
                            </button>

                        </div>

                    </>
                )}

            </div>
        </Layout>
    );
}

export default Cart;