import axios from 'axios';
const myUrl = "http://localhost:3000/api/films";

export const getFilms = async () => {
    const data = await axios.get(myUrl);
    return data;
}

export const addFilm = async (newFilm) => {
    const data = await axios.post(myUrl, newFilm, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}