const baseUrl = 'https://api.giphy.com/v1/gifs/search?api_key=W7yxLc2XnPExjexSDj5c7HT1JVgjfL4I&limit=5';

async function getGifos(search){
    const gifos = await fetch(baseUrl + '&q=' + search)
    const infogifos = await gifos.json();
    console.log (infogifos.data);
    
    let cardGifos = document.getElementById('containerGifs');
    cardGifos.innerHTML= '';

    for (let i = 0; i < infogifos.data.length; i++) {
        let newGifos = document.createElement('img');
        newGifos.classList.add('imgnewgifos');
        
        newGifos.setAttribute("src", infogifos.data[i].images.fixed_height.url);

        cardGifos.appendChild(newGifos);
    }
}

let searchInput = document.getElementById('inputText');
searchInput.addEventListener('input', function(event) {
    if (event.target.value == '') {
        alert('Ingrese algo');
    } else {
        getGifos(event.target.value);
    }
});

getGifos();
