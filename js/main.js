// html 태그 가져오기
const card = document.querySelector("#card");

// API 가져오기
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDU4YmJlOTdjYzA1Nzk4N2Q1MTAxZTEwN2QyZGFhMiIsInN1YiI6IjY1MmY3MGVjYzk5NWVlMDBlM2Y2OWMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iCU00Jf2HYptUo5tLzX0aVoVrVJDze0Fqx8zQk-Dq50'
  }
};

const imgClick = (id) => {
  alert(`id: ${id}`);
}

const url = "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";
const getMovie = async() => {
  fetch(url, options)
    .then(response => {
      return response.json();
    })
    .then(data =>  {
      const movies = data.results;
      const imgUrl = "https://image.tmdb.org/t/p/w500";
      movies.forEach(item => {
        // console.log(item);
        const {
          title,
          overview,
          vote_average,
          backdrop_path,
          id,
        } = item;

        let img = imgUrl + backdrop_path;
        let cardHtml = `
        <div id="movie-card-wrap">
          <img src=${img} alt="영화 이미지" onclick="imgClick(${id})" class="movie-img"></img>
          <p class="movie-title">${title}</p>
          <p class="movie-content">${overview}</p>
          <p class="rating-icon"><span class="movie-rating">${vote_average}</span></p>
        </div>
        `;

        if (overview !== "") {
          card.insertAdjacentHTML("beforeend", cardHtml);
        }
      });
    })
    .catch(err => console.error(err));
  }
  
  getMovie();