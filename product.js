const ProductManager = require("./productManager");

//Agregar un nuevo producto al invent
const producto = new ProductManager();
//console.log(producto.getProducts());

//title, descrption, price, thumbnail, code, stock
console.log(producto.addProduct('Producto1','Esta es la descripción del producto1',800000,'https:/micarpeta/img1.jpg',"mxFgh5",6));
console.log(producto.addProduct('Producto2','Esta es la descripción del producto2',500000,'https:/micarpeta/img2.jpg',"fgtJd2",10));
console.log(producto.addProduct('Producto3','Esta es la descripción del producto3',500000,'https:/micarpeta/img3.jpg',"fgtJd2",8));
console.log(producto.addProduct('Producto4','Esta es la descripción del producto4',900000,'https:/micarpeta/img3.jpg',"asdfTg3",7));

//Mostrar los productos
console.log(producto.getProducts());

//Mostrar un producto por su id
console.log("---------------------------------------------------------------------------------");
console.log("A continuación se muestra el producto con el ID:1");
console.log(producto.getProductsById(1));