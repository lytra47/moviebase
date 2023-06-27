const Search = async function (searchMovie) {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${searchMovie}&apikey=480344f1&r=json`
  );
  const result = await response.json();

  return result;
};

export default Search;
