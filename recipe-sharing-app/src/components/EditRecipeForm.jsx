import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe, onDone }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert('Please enter both title and description.');
      return;
    }

    updateRecipe({
      id: recipe.id,
      title,
      description,
    });

    if (onDone) onDone();
    // stay on details page (or navigate) — stay here
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
