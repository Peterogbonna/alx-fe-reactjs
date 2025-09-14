import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm('Are you sure you want to delete this recipe?');
    if (!ok) return;
    deleteRecipe(id);
    navigate('/'); // go back to home/list after deleting
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: 8 }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
