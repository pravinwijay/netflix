const FilmDisplay = ({ nom, description, urlImage, type }) => {
    console.log("URL:", urlImage);
    return (
        <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md">
            <h1><strong>{nom}</strong></h1>
            <img
                src={urlImage}
                alt={nom}
                className="h-48 w-96 object-cover border-2 border-gray-300 rounded-lg"
            />
            <p><strong>Genre:</strong> {type}</p>
            <p><strong>Description:</strong> {description}</p>
            <div className="flex space-x-4"> 
                <button className="bg-blue-500 text-white p-2 rounded">
                    Modifier
                </button>
                <button className="bg-blue-500 text-white p-2 rounded">
                    Supprimer
                </button>
            </div>
        </div>
    );
}
export default FilmDisplay;