
// let input = document.getElementById('input-buscar');
// let btn = document.getElementById('btn-buscar');

// function querySearch(text) {
//     let url = 'https://api.chucknorris.io/jokes/search?query=';

//     fetch(url + text)
//         .then((data) => {
//             return data.json();
//         })
//         .then((json) => {
//             console.log(json);

//             if (json.total != 0) {
//                 for (let i = 0; i < json.total; i++) {
//                     let cont = document.getElementById('container');
//                     let icon = document.createElement('img');
//                     let notice = document.createElement('h1');

//                     icon.src = json.result[i].icon_url;
//                     notice.innerText = json.result[i].value;
//                     cont.appendChild(icon);
//                     cont.appendChild(notice);
//                 }
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }

// function listenerBtn() {
//     let text = input.value;
//     if (text) {
//         querySearch(text);
//     }
// }

// btn.addEventListener("click", listenerBtn);

const url = `https://api.chucknorris.io/jokes/random`;
let noticias = [];
class chuckNoticia{
    constructor(icono, valor, url, fecha){
        this.icono = icono;
        this.valor = valor;
        this.url = url;
        this.fecha = fecha;
    }
    setfechaNoticia(){
        this.fecha = new Date(this.fecha);
    }
    getFechaNoticia(){
        return this.fecha;
    }
}
async function getNoticia(url) {
    let datos = await fetch(url);
    let respuesta = await datos.json();
    if (datos.ok) {
        console.log("Respuesta OK");
        let {created_at: fecha, icon_url: icono, url, value: valor} = respuesta;
            const noticia = new chuckNoticia(icono, valor, url, fecha);
            noticias.push(noticia);
            noticia.setfechaNoticia();
    } else
        console.log("Algo falla con el link");
}
for (let i = 0; i < 4; i++) {   
    getNoticia(url);
    
}

console.log(noticias);