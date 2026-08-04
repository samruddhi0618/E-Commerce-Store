import categories from "../../data/categories";
import CategoryCard from "./CategoryCard";

function Categories() {
    return (
        <section className="max-w-7xl mx-auto py-16 px-6">

            <h1 className="text-4xl font-bold mb-10">
                Shop By Category
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                    />
                ))}

            </div>

        </section>
    );
}

export default Categories;