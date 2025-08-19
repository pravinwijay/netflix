import axios from 'axios';
const myUrl = "http://localhost:3000/api/films";

export const getFilms = async () => {
    const response = await axios.get(myUrl);
    return response.data; 
}

export const getFilmsParGenre = async (genre) => {
  const response = await axios.get(`${myUrl}?genre=${encodeURIComponent(genre)}`);
  return response.data;
};

export const addFilm = async (newFilm) => {
    const data = await axios.post(myUrl, newFilm, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const updateFilm = async (id, updatedFilm) => {
  const res = await axios.put(`http://localhost:3000/api/films?id=${id}`, updatedFilm, {
    headers: { 'Content-Type': 'application/json' }
  });
  return res.data;
};

export const deleteFilm = async (id) => {
  return await axios.delete(`${myUrl}?id=${id}`);
};