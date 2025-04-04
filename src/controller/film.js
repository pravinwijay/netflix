export const getFilm = async () => {
    const data = await axios.get(myUrl);
    return data;
}