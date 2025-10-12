import { useState } from "react";

const RegistrationForm = () => {
  // Define form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    // Simulate API call
    console.log("Form submitted:", formData);
    setSuccess("User registered successfully!");
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
            value={formData.username}  {/* ✅ controlled value */}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            value={formData.email}  {/* ✅ controlled value */}
            onChange={handleChange}
          />
        </div>

        <div>
            <label className="block mb-1">Value:</label>
            <input
               type="value"
               name="value"
               className="w-full p-2 border rounded"
               value={formData.value}
               onChange={handleChange}
            />
        </div>

        <div>
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded"
            value={formData.password}  {/* ✅ controlled value */}
            onChange={handleChange}
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

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
