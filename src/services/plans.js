import axios from "axios";

export const getPlans = async () => {
  const response = await axios.get("https://rimac-front-end-challenge.netlify.app/api/plans.json");
  return response.data;
};