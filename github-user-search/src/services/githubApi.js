import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

// Get token from environment variable
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`, {
      headers: {
        Authorization: token ? `token ${token}` : "",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
