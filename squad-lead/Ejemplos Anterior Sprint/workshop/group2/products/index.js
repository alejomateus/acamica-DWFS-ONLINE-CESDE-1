let products = [];

class Products {

    id;
    titulo;
    precio;
    descripcion;
    image;
}


let product1 = new Products();

product1.id = products.length+1;
product1.titulo = "Bicicleta"
product1.precio = 5000;
product1.descripcion = "Bicicleta para Adulto-Mountain Bike";
product1.image = "../img/bicicleta.jpg";

products.push(product1);
console.log(products);


let product2 = new Products();

product2.id = products.length+1;
product2.titulo = "Rollers"
product2.precio = 2.500;
product2.descripcion = "Rollers para Adulto";
product2.image = "../img/rollers.jpg";

products.push(product2);
console.log(products);


let product3 = new Products();

product3.id = products.length+1;
product3.titulo = "Mancuernas"
product3.precio = 500;
product3.descripcion = "Mancuernas ejercicio p/brazos";
product3.image = "../img/mancuernas.jpg";

products.push(product3);
console.log(products);


let product4 = new Products();

product4.id = products.length+1;
product4.titulo = "Skate"
product4.precio =1569;
product4.descripcion = "Skate Mountain-Bike";
product4.image = "../img/skate.jpg";

products.push(product4);
console.log(products);



let product5 = new Products();

product5.id = products.length+1;
product5.titulo = "Pelotas"
product5.precio =2000;
product5.descripcion = "Pelotas de basquet para partido";
product5.image = "../img/pelotas.jpg";

products.push(product5);
console.log(products);




let product6 = new Products();

product6.id = products.length+1;
product6.titulo = "Bici fija"
product6.precio = 5000;
product6.descripcion = "Bicicleta fija p/ hogar";
product6.image = "../img/bici-fija.jpg";

products.push(product6);
console.log(products);




let product7 = new Products();

product7.id = products.length+1;
product7.titulo = "Raquetas"
product7.precio = 1677;
product7.descripcion = "Raquetas Tenis c/ par";
product7.image = "../img/raqueta.jpg";

products.push(product7);
console.log(products);




let product8 = new Products();
product8.id = products.length+1;
product8.titulo = "Aro de basquet"
product8.precio = 60000;
product8.descripcion = "Aro Basquet p/ hogar";
product8.image = "../img/aro.jpg";

products.push(product8);
console.log(products);


let container = document.getElementById("container");



for(let i = 0; i < products.length; i++){
   let container_product = document.createElement("div");

   container_product.innerHTML = '<div class="articulo">'+'<img src="'+products[i].image+'">'+'<span class="precio">Precio $'+products[i].precio+'</span>'+
   '<p>'+products[i].descripcion+'</p>'+'<button class="btn" id="button">Agregar al carrito</button> </div>'
   

container.appendChild(container_product);

}


