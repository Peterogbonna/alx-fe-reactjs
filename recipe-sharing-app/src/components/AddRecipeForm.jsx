import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert('Please enter both a title and a description.');
      return;
    }

    const newRecipe = {
      id: Date.now().toString(),
      title,
      description,
    };

    addRecipe(newRecipe);
    setTitle('');
    setDescription('');

    // Optionally navigate to the newly created recipe
    navigate(`/recipes/${newRecipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Add New Recipe</h2>
      <input
        type="text"
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
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
