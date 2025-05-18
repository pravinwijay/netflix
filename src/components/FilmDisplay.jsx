const FilmDisplay = ({ nom, description, urlImage, genre }) => {
    console.log("URL:", urlImage);
    return (
      <div className="flex flex-col gap-2 p-4 bg-white shadow-md">
        <div className="relative group w-full h-96">
          <img
            src={urlImage}
            alt={nom}
            className="w-full h-full object-contain rounded-lg transition-opacity duration-500 group-hover:opacity-20"/>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-base md:text-lg font-light max-w-full break-words text-justify">{description}</p>
                <span className="mt-2 text-sm md:text-base italic max-w-full break-words">{genre}</span>
            </div>
        </div>
    </div>
    );
}
export default FilmDisplay;