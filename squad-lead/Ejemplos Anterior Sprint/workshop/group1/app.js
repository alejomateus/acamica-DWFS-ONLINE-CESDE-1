// El objetivo de este encuentro es armar una aplicación de un e-commerce; 
// en la cual se listen productos; y que le permita a un/a usuario/a 
// añadir a un carrito aquellos que quiera comprar.

// El carrito debe tener un botón de Comprar para pasar a pagar los productos seleccionados.
// Divide el proceso de pago en 2 pasos=
// - Datos personales
// - Datos de pago

// Productos
// Utiliza un array de productos; donde cada elemento sea un objeto 
// que almacene toda la información que vas a mostrar en el diseño de tu sitio.
// Carrito
// Cada vez que un usuario añade un producto a su carrito; 
// almacénalo en el localStorage (te permitirá mantener la información si el usuario recarga la página).

// Imagen
// Nombre 
// Descripción
// Precio

let products = [];

class productsClass {
    id = 0;
    brand = '';
    name = '';
    value = 0;
    img = '';
}

let product1 = new productsClass();
    product1.id= products.length+1;
    product1.brand= 'Nike';
    product1.name= 'zapatillas';
    product1.value= 1600;
    product1.img= 'https=//via.placeholder.com/300x300';

let product2 = new productsClass();
    product2.id= products.length+1;
    product2.brand= 'Adidas';
    product2.name= 'zapatillas urbana';
    product2.value= 1500;
    product2.img= 'https=//via.placeholder.com/300x300';


let product3 = new productsClass();
    product3.id= products.length+1;
    product3.brand= 'Grimoldi';
    product3.name= 'zapato caballero';
    product3.value= 5000;
    product3.img= 'https=//via.placeholder.com/300x300';

let product4 = new productsClass();
    product4.id= products.length+1;
    product4.brand= 'Sarkany';
    product4.name= 'zapato mujer';
    product4.value= 7000;
    product4.img= 'https=//via.placeholder.com/300x300';

let product5 = new productsClass();
    product5.id= products.length+1;
    product5.brand= 'Vans';
    product5.name= 'zapatillas urbanas';
    product5.value= 6500;
    product5.img= 'https=//via.placeholder.com/300x300';

let product6 = new productsClass();
    product6.id= products.length+1;
    product6.brand= 'Converse';
    product6.name= 'zapatilla street';
    product6.value= 3400;
    product6.img= 'https=//via.placeholder.com/300x300';

products.push(product1, product2, product3, product4, product5, product6);


let containerProducts = document.getElementById('containerProducts');

for (let i = 0; i < products.length; i++) {
    let containerNewProducts = document.createElement('div');

    containerNewProducts.innerHTML = //codigo HTML del div producto ;

    containerProducts.appendChild(containerNewProducts);
}


let carrito = [];
let total = 0;