import axios from "axios";
const myUrl = "http://localhost:3000/api/genre";

export const getGenres = async () => {
  const response = await axios.get(myUrl);
  return response.data;
};