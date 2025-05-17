import axios from "axios";
const myUrl = "http://localhost:3000/api/categ";

export const getCateg = async () => {
    const data = await axios.get(myUrl);
    return data;
}