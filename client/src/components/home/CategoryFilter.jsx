const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Furniture",
    "Accessories",
];

function CategoryFilter({ category, setCategory }) {
    return (
        <div className="flex gap-3 flex-wrap mb-10">

            {categories.map((item) => (
                <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`px-5 py-2 rounded-lg transition ${category === item
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200"
                        }`}
                >
                    {item}
                </button>
            ))}

        </div>
    );
}

export default CategoryFilter;