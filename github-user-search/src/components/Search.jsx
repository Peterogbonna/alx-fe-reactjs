import { useState } from "react";

function Search({ onSearch }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            onSearch(input);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem"}}>
            <input
            type="text"
            placeholder="Enter GitHub username..."
            onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;