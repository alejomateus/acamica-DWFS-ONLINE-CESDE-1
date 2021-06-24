
let url = "img/collorfull-cat_7790-2.jpg";

// var cabecera = new Headers();

// var opciones = {
//     method: 'GET',
//     headers: cabecera,
//     mode: 'cors',
//     cache: 'default',
//     headers: {
//         'Content-Type': 'image/jpeg'
//     }
// }

setTimeout(
    function () {
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    let img = document.getElementById('changing_img');
                    img.setAttribute('src', res.url);
                }else{
                    console.log("no se encontro");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    , 2000)
