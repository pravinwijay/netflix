const FilmDisplay = ({ nom, description, urlImage, genre }) => {
  return (
    <div className="flex flex-col items-center justify-between border border-black rounded-2xl p-4 bg-white shadow-sm w-full max-w-xs mx-auto">
      <img
        src={urlImage}
        alt={nom}
        className="w-full h-64 object-cover rounded-xl bg-lime-300 shadow-md"
      />
      <h2 className="text-lg font-bold text-center">{nom}</h2>
      <p className="mt-1 text-center text-sm text-gray-800">{description}</p>
      <span className="text-xs italic text-gray-600">{genre}</span>
      <button className="mt-2 border border-black px-4 py-1 rounded hover:bg-gray-100">
        En savoir plus
      </button>
    </div>
  );
};

export default FilmDisplay;