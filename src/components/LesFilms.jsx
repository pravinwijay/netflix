import React from 'react'
 
const LesFilms = ({nomFilm, categFilm, description, distribution}) => {
  return (
    <div className="border-2 border-black rounded-xl bg-white p-6 mt-auto">
            <div className="flex justify-between items-center mb-7">
                <p className="text-2xl font-bold">Nom de la section</p>
            </div>

            <div className="flex space-x-4">
                <p>ici, il y'aura les films avec les affiches</p>
            </div>
            <p className="mt-4 font-bold">Ici, le nom des acteurs</p>
            <p>ici, ça sera la description</p>
        </div>
  )
}

export default LesFilms