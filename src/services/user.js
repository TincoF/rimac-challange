import axios from "axios";

export const getUser = async () => {
  const response = await axios.get("https://rimac-front-end-challenge.netlify.app/api/user.json");
  return response.data;
};