function SearchBar({ username, setUsername, onSearch }) {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <input
            type="text"
            placeholder="Enter Github Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
}

export default SearchBar;