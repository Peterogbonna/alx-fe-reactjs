// src/App.jsx
import './App.css';

// Import the new components
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
     {/* Example User Profile */}
     <UserProfile
     name="Alice"
     age="25"
     bio="Loves hiking and photography"
    />

    <UserProfile 
     name="John"
     age="30"
     bio="A passionate web developer and traveler"
    />
  </>
  );
}

export default App;
