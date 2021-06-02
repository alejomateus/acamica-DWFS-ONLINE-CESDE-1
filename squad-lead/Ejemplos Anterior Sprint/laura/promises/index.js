// function getApi(url){
//     return fetch(url)
//     .then((response) => response.json())
//     .then((res) => {
//         console.log(res);
//         getFollowers(res);
//     }).catch(err =>{
//         console.log(err)
//     })
// }

// let resultado = getApi('https://api.github.com/users/alejomateus');

// function getFollowers(res){
//     if (resultado.message && resultado.message === "Not Found") {
//         console.log("error")
//     } else {
//         return fetch(res.followers_url)
//         .then((response2) => response2.json())
//         .then((followers) => {
//             console.log(followers)
//         }).catch(err2 =>{
//             console.log(err2)
//     })
//     }
// }

// let esPar = new Promise((resolve, reject) => {
//     console.log("procesando....")
//     setTimeout(() => {
//         let number = Math.floor(Math.random() * 10);
//             if(number % 2 == 0) {
//                resolve (number)
//             } else {
//                 reject (number)
//             }
//     }, 4000);
       
// });

// esPar.then((result) => {
//     console.log("es par", result);
// })
// .catch(error => {
//     console.log("es impar", error)
// })

const apiKey = "j4As5HO2OpUG2w2gTuuqQnIGuwOu2nnJ"
function getApi(url){
    return fetch(url)
    .then((response) => response.json())
    .then((res) => {
        console.log(res);
        // getFollowers(res);
    }).catch(err =>{
        console.log(err)
    })
}

let resultado = getApi('https://api.giphy.com/v1/gifs/search' + '?api_key=' + apiKey)