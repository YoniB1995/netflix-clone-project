
export const baseURL = "https://api.themoviedb.org/3"
const moviesUrl = "https://image.tmdb.org/t/p/original/"
// const API_KEY = "23dc6b8a98b8775ae671018f9da37a57";

const API_KEY = process.env.REACT_APP_KEY
// const API_KEY = process.env.REACT_APP_API_KEY // מסתיר מידע באופן מאובטח
export const moviesTrending ="https://api.themoviedb.org/3/trending/all/week?api_key=23dc6b8a98b8775ae671018f9da37a57&language=en-US";

console.log(API_KEY)

export const requests = {
    fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;


