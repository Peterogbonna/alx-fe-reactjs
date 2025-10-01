// src/App.jsx

import UserProfile from './components/UserProfile'; 

function App() {
  return (
    // Test the blue background and large padding.
    <div className="bg-blue-100 p-10">
      <h1 className="text-3xl font-bold text-red-600">Tailwind is Working!</h1>
      {/* Include your UserProfile component here */}
      <UserProfile /> 
    </div>
  );
}

export default App;