fetch("https://ghibliapi.vercel.app/films")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const movies = data;
    //console.table(data);
    displayMiyazaki(movies);
    displayDirectors(movies);
    byDirector(movies);
  });

function displayMiyazaki(movies) {
  const directorList = document.getElementById("filmsBy");

  movies.forEach((movie) => {
    const real = document.createElement("p");
    if (movie.director == "Hayao Miyazaki") {
      real.setAttribute("class", "miyazaki");
      real.textContent = movie.title;
    } else {
      real.textContent = movie.title;
    }
    directorList.appendChild(real);
  });
}

function displayDirectors(movies) {
  directorList = [];
  const listOfDirectors = document.getElementById("directors");
  const result = movies.reduce((realisators, movie) => {
    if (!directorList.includes(movie.director)) {
      const director = document.createElement("li");
      director.textContent = movie.director;
      directorList.push(movie.director);
      listOfDirectors.appendChild(director);
      return realisators;
    }
  });
}

function byDirector(movies) {
  directorList = [];
  const directorHTML = document.getElementById("directorsfilmsList");
  const result = movies.reduce((realisators, movie) => {
    if (!directorList.includes(movie.director)) {
      directorList.push(movie.director);
      return realisators;
    }
  });

  directorList.forEach((director) => {
    const directorName = document.createElement("p");
    directorName.setAttribute("id", "DirectorName")
    directorName.textContent = director;
    movies.forEach((movie) => {
      if(movie.director == director){
        const movieName = document.createElement("li");
        movieName.textContent = movie.title;
        directorName.appendChild(movieName);
        console.log(director , movie.title);
      }
    });
    directorHTML.appendChild(directorName);
  });
}
