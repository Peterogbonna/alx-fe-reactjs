import axios from "axios";

const BASE_URL = "https//api.github.com";

export const advancedUserSearch = async (username, location, minRepos) => {
    let query = [];

    if (username) query.push(`${username} in:login`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);

    const queryString = query.join(" ");
    
    const response = await axios.get(`${BASE_URL}/search/users?q=${queryString}`);
    return response.data;
};