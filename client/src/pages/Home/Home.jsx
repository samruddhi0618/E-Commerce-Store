import { useState } from "react";

import Layout from "../../components/layout/Layout";
import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FlashSale from "../../components/home/FlashSale";
import SearchBar from "../../components/home/SearchBar";
import CategoryFilter from "../../components/home/CategoryFilter";
import ProductCard from "../../components/product/ProductCard";

import products from "../../data/products";

function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    // Filter Products
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <Layout>
            {/* Hero Section */}
            <Hero />

            {/* Categories */}
            <Categories />

            {/* Flash Sale */}
            <FlashSale />

            {/* Products Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                {/* Search Bar */}
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                {/* Category Filter */}
                <CategoryFilter
                    category={category}
                    setCategory={setCategory}
                />

                {/* Section Title */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold">
                        Featured Products
                    </h2>

                    <span className="text-gray-600 font-medium">
                        {filteredProducts.length} Products Found
                    </span>
                </div>

                {/* Product Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20">
                        <h2 className="text-3xl font-bold text-gray-500">
                            😔 No Products Found
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Try another search or category.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}
            </section>
        </Layout>
    );
}

export default Home;