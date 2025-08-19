"use client";
import { useState, useEffect } from "react";
import { getGenres } from "@/controller/genre";
import { updateFilm, getFilms } from "@/controller/film";

const ModifFilm = () => {
  const [formData, setFormData] = useState({
    id: "",
    nom: "",
    description: "",
    affiche: "",
    genre: ""
  });

  const [genres, setGenres] = useState([]);
  const [films, setFilms] = useState([]);
  const [selectedFilmId, setSelectedFilmId] = useState("");

  useEffect(() => {
    const fetchGenresAndFilms = async () => {
      const genreData = await getGenres();
      const filmData = await getFilms(); 
      setGenres(genreData);
      setFilms(Array.isArray(filmData) ? filmData : filmData.data);
    };
    fetchGenresAndFilms();
  }, []);

  useEffect(() => {
    if (!selectedFilmId) return;
    const film = films.find(f => f.id === parseInt(selectedFilmId));
    if (film) setFormData(film);
  }, [selectedFilmId, films]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateFilm(formData.id, formData);
    alert("Film modifié !");
  };

  console.log("Films dans le composant :", films);
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-xl border border-yellow-600 shadow mt-10">
      <label className="block">
        <span className="text-gray-700">Choisir un film</span>
        <select
          value={selectedFilmId}
          onChange={(e) => setSelectedFilmId(e.target.value)}
          className="mt-1 block w-full border rounded"
        >
          <option value="">-- Sélectionnez un film --</option>
      {films
  .filter((film) => film.id !== undefined && film.id !== null)
  .map((film) => (
    <option key={`film-${film.id}`} value={film.id}>
      {film.nom}
    </option>
))}
        </select>
      </label>
      <label className="block">
        <span className="text-gray-700">Nom</span>
        <input name="nom" value={formData.nom} onChange={handleChange} className="mt-1 block w-full border rounded" />
      </label>

      <label className="block">
        <span className="text-gray-700">Description</span>
        <input name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full border rounded" />
      </label>

      <label className="block">
        <span className="text-gray-700">Affiche (URL)</span>
        <input name="affiche" value={formData.affiche} onChange={handleChange} className="mt-1 block w-full border rounded" />
      </label>

      <label className="block">
        <span className="text-gray-700">Genre</span>
        <select name="genre" value={formData.genre} onChange={handleChange} className="mt-1 block w-full border rounded">
          <option value="">Sélectionnez un genre</option>
          {Array.isArray(genres) && genres.map(g => (
            <option key={g.id_genre} value={g.id_genre}>{g.libelle}</option>
          ))}
        </select>
      </label>

      <button type="submit" className="w-full bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-700">Modifier le film</button>
    </form>
  );
};

export default ModifFilm;