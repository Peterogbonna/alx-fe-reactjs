import { useParams, Link, useSearchParams } from "react-router-dom";
import ( useState, useEffect ) from "react"
import data from "../data.json";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
        <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            {recipe.title}
          </h1>

          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <h2 className="text-xl font-semibold mb-2 text-gray-800">Ingredients</h2>
          <ul className="list-disc list-inside mb-6 text-gray-600">
            {recipe.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2 text-gray-800">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <Link
            to="/"
            className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
