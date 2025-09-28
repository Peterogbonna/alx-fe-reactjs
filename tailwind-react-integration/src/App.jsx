// src/App.jsx (Modify Existing File)

import UserProfile from './components/UserProfile'; // <--- ADD THIS IMPORT

function App() {
  // You might have other code or state here, keep it.
  
  return (
    <div className="p-4"> 
      {/* You can add your new component here */}
      <UserProfile /> 
      
      {/* If your App.jsx had other content (like a logo, counter, etc.), 
          you would place the UserProfile component where you want it to appear.
      */}
    </div>
  );
}

export default App;