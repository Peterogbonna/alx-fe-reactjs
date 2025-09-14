import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  // local UI state to toggle editing
  const [isEditing, setIsEditing] = (React || require('react')).useState(false);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 8 }}>
        Back
      </button>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 16 }}>
        <button onClick={() => setIsEditing((s) => !s)}>
          {isEditing ? 'Cancel Edit' : 'Edit'}
        </button>

        <DeleteRecipeButton id={recipe.id} />
      </div>

      {isEditing && (
        <div style={{ marginTop: 16 }}>
          <EditRecipeForm recipe={recipe} onDone={() => setIsEditing(false)} />
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
