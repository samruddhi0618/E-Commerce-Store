import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import products from "../../data/products";

function ProductDetails() {
    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <Layout>
                <div className="max-w-7xl mx-auto py-20 text-center">
                    <h1 className="text-5xl font-bold text-red-600">
                        Product Not Found
                    </h1>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Product Image */}
                    <div>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="rounded-xl shadow-xl w-full"
                        />
                    </div>

                    {/* Product Details */}
                    <div>

                        <h1 className="text-5xl font-bold">
                            {product.name}
                        </h1>

                        <p className="text-yellow-500 text-2xl mt-5">
                            ⭐ {product.rating}
                        </p>

                        <h2 className="text-4xl font-bold text-blue-600 mt-5">
                            ₹ {product.price.toLocaleString()}
                        </h2>

                        <div className="mt-8 space-y-3">

                            <p>
                                <span className="font-semibold">
                                    Brand:
                                </span>{" "}
                                {product.brand}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Category:
                                </span>{" "}
                                {product.category}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Stock:
                                </span>{" "}
                                {product.stock}
                            </p>

                        </div>

                        <p className="mt-8 text-gray-600 leading-8">
                            {product.description}
                        </p>

                        <div className="mt-10 flex gap-5">

                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition">
                                Add to Cart
                            </button>

                            <button className="bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold transition">
                                Buy Now
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </Layout>
    );
}

export default ProductDetails;