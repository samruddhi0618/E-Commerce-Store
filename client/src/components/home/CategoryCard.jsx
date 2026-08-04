function CategoryCard({ category }) {
    return (
        <div className="group cursor-pointer">

            <div className="overflow-hidden rounded-xl shadow-lg">

                <img
                    src={category.image}
                    alt={category.title}
                    className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
                />

            </div>

            <h2 className="text-center mt-4 text-xl font-semibold">
                {category.title}
            </h2>

        </div>
    );
}

export default CategoryCard;