import React, { useEffect, useState } from 'react';
import { getFilms } from '../controller/film';
import FilmDisplay from './FilmDisplay';

const FilmsListDisplay = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await getFilms();
        setFilms(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des films :', error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Tous nos films</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4">
        {films.map((film) => (
          <FilmDisplay
            key={film.id}
            nom={film.nom}
            description={film.description}
            urlImage={film.urlImage}
            genre={film.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default FilmsListDisplay;