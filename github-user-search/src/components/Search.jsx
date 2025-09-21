import { useState } from "react";
import { fetchUserData, advancedUserSearch } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (location || minRepos) {
        // 👉 Use advanced search when filters are provided
        const data = await advancedUserSearch(username, location, minRepos);
        setResults(data.items || []);
      } else {
        // 👉 Fallback to fetching a single user
        const user = await fetchUserData(username);
        setResults([user]);
      }
    } catch (err) {
      setError("No results found. Please try again.");
      setResults([]);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
