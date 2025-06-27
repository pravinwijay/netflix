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
      <a
        href="https://www.netflix.com/fr/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fbrowse"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 border border-black px-4 py-1 rounded hover:bg-gray-100"
      >
        En savoir plus
      </a>
    </div>
  );
};

export default FilmDisplay;

// POUR LA DEMO 

// Uncharted (2022)

// https://fr.web.img6.acsta.net/pictures/22/01/18/10/13/5983633.jpg

// Le chasseur de trésors Victor Sully Sullivan recrute Nathan Drake pour l'aider à récupérer une fortune.