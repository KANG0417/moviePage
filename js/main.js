const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 6058bbe97cc057987d5101e107d2daa2'
  }
};

const url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=3&sort_by=popularity.desc";

const fetchMovie = async() => {
  fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
    // 생성하는
    
  }
  
  
  getMovie();