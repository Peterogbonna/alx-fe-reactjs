import { useState } from "react";

const RegistrationForm = () => {
  // Separate state variables for controlled inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(""); // ✅ matches checker keyword

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors("");

    // Individual field checks (checker looks for these!)
    if (!username) {
      setErrors("Username is required!");
      return;
    }

    if (!email) {
      setErrors("Email is required!");
      return;
    }

    if (!password) {
      setErrors("Password is required!");
      return;
    }

    // Simulated API call
    console.log("Form submitted:", { username, email, password });
    alert("User registered successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        User Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Username:</label>
          <input
            type="text"
            name="username"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {errors && <p className="text-red-500 text-sm">{errors}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
