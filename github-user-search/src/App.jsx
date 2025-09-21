import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { getUser } from "./services/githubApi";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      const data = await getUser(username);
      setUserData(data);
    } catch {
      setError("User not found!");
      setUserData(null);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search App</h1>
      <SearchBar
        username={username}
        setUsername={setUsername}
        onSearch={handleSearch}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt="avatar" width={100} />
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;
