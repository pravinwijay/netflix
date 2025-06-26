

"use client";
import { useEffect, useState } from "react";
import { getFilms, deleteFilm } from "@/controller/film";

const SupprFilm = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilmId, setSelectedFilmId] = useState("");

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await getFilms();
        setFilms(data);
      } catch (err) {
        console.error("Erreur lors du chargement des films :", err);
      }
    };
    fetchFilms();
  }, []);

  const handleDelete = async () => {
    if (!selectedFilmId) return;
    if (!confirm("Voulez-vous vraiment supprimer ce film ?")) return;

    try {
      await deleteFilm(selectedFilmId);
      alert("Film supprimé !");
      setFilms(films.filter((film) => film.id !== parseInt(selectedFilmId)));
      setSelectedFilmId("");
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
      alert("Échec de la suppression.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-8">
      <h1 className="text-xl font-semibold mb-4 text-center">Supprimer un film</h1>

      <label className="block mb-2">
        <span className="text-gray-700">Choisir un film à supprimer</span>
        <select
          value={selectedFilmId}
          onChange={(e) => setSelectedFilmId(e.target.value)}
          className="mt-1 block w-full border rounded px-3 py-2"
        >
          <option value="">-- Sélectionnez un film --</option>
          {films.map((film) => (
            <option key={film.id} value={film.id}>
              {film.nom}
            </option>
          ))}
        </select>
      </label>

      <button
        onClick={handleDelete}
        disabled={!selectedFilmId}
        className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 disabled:opacity-50"
      >
        Supprimer
      </button>
    </div>
  );
};

export default SupprFilm;