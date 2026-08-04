function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">

                {/* Left Side */}
                <div className="max-w-xl">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Discover Amazing Products
                    </h1>

                    <p className="mt-6 text-lg text-gray-200">
                        Shop the latest fashion, electronics, home essentials,
                        and much more at unbeatable prices.
                    </p>

                    <button className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                        Shop Now
                    </button>
                </div>

                {/* Right Side */}
                <div className="mt-10 md:mt-0">
                    <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
                        alt="Shopping"
                        className="rounded-xl shadow-2xl w-[450px]"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;