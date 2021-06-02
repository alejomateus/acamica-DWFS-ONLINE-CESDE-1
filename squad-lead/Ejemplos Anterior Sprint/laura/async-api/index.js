
const baseUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=917ac377&t=avengers+endgame';



async function getMovie(){
    const movie = await fetch(baseUrl)
    const infoMovie = await movie.json();
    console.log (infoMovie);

    let imageMovie = document.getElementById("image1");
    let titleMovie = document.getElementById("title");
    let descriptionMovie = document.getElementById("text");
    
    imageMovie.setAttribute("src", infoMovie.Poster);
    titleMovie.innerHTML = infoMovie.Title;
    descriptionMovie.innerHTML = infoMovie.Plot;


}

getMovie()


