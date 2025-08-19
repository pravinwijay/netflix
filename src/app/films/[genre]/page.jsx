"use client";
import { use, useEffect, useState } from "react";
import { getFilmsParGenre } from "@/controller/film";
import FilmDisplay from "@/components/FilmDisplay";

const FilmsParGenre = ({ params }) => {
  const { genre } = use(params);
  const decodedGenre = decodeURIComponent(genre);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await getFilmsParGenre(decodedGenre);
        setFilms(data);
      } catch (error) {
        console.error("Erreur chargement films :", error);
      }
    };

    fetchFilms();
  }, [decodedGenre]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Films : {decodedGenre}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4">
        {films.map((film) => (
          <FilmDisplay
            key={film.id}
            nom={film.nom}
            description={film.description}
            urlImage={film.affiche}
            genre={film.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default FilmsParGenre;