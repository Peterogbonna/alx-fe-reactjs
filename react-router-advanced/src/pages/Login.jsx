import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Simulate login
    alert("Logged in! (set isAuthenticated = true in ProtectedRoute.jsx)");
    navigate("/profile");
  };
  return (
    <div>
      <h1>🔐 Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}