const tmdbKey = "d0b1862294a50ae09f3e89f5e341bdee";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json(); // .json() takes the JSON object response that came back from .fetch() promise and converts it into a JS readable object
      console.log(jsonResponse);
      const genres = jsonResponse.genres; // genres is a jsonResponse object after converting it from a JSON object and here you access its only key "genres" which has an array as its value
      console.log(genres[0].id); // genres[0].id gives you "28" for example because 0: {id: 28, name: 'Action'}
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();
  console.log(typeof selectedGenre); 
  // const queryParams = `${tmdbKey}?`
};

const getMovieInfo = () => {};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
