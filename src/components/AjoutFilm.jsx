"use client";
import { useState, useEffect } from "react";
import { addFilm } from "@/controller/film";
import { getGenres } from "@/controller/genre"; 

const AjoutFilm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    affiche: "",
    genre: ""
  });

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData = await getGenres(); 
        setGenres(genresData);
      } catch (error) {
        console.error("Erreur lors du chargement des genres :", error);
        setGenres([]); 
      }
    };  
    fetchGenres();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFilm(formData);
    alert("Film ajouté !");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-xl border border-green-500 shadow mt-10">

      <label className="block">
        <span className="text-gray-700">Nom</span>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Description</span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Affiche (URL)</span>
        <input
          type="text"
          name="affiche"
          value={formData.affiche}
          onChange={handleChange}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Genre</span>
        <select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
        >
          <option value="">Sélectionnez un genre</option>
          {Array.isArray(genres) && genres.map(g => (
            <option key={g.id_genre} value={g.id_genre}>
              {g.libelle}
            </option>
          ))}
        </select>
      </label>

      <input
        type="submit"
        value="Ajouter le film"
        className="w-full py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700"
      />
    </form>
  );
};
export default AjoutFilm;