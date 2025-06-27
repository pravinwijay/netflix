"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import FilmDisplay from '@/components/FilmDisplay';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('/api/films')
      .then(response => setFilms(response.data))
      .catch(error => console.error('Error fetching films:', error));
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-6">
        {films.map((film, index) => (
          <FilmDisplay
            key={index}
            nom={film.nom}
            description={film.description}
            urlImage={film.affiche}
            genre={film.genre}
          />
        ))}
      </div>
    </>
  );
}
