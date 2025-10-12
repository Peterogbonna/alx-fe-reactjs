import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState(data);

  return (
    <div className="p-10 text-center bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Recipe Sharing Platform</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.description}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
