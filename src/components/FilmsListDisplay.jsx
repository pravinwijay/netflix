import React from 'react';
import { getFilms } from '../controller/film';
import FilmDisplay from './FilmDisplay';

const FilmsListDisplay = async () => {
    const listFilms = (await getFilms()).data;

    return (
        <>
            <div className="flex justify-between">
                <h1>Tout nos films</h1>
                <FilmDisplay/>
            </div>
        </>
    )
}

export default FilmsListDisplay;