class ProductManager {
    #products;
    static idProduct=0;
    constructor() {
        this.#products = [];
    }

    addProduct(title, descrption, price, thumbnail, code, stock) {  
        if (!title || !descrption || !price || !thumbnail || !code || !stock)
            return "Faltan datos son requeridos";       
        //validar que el codigo no se repita
        const productExist = this.#products.some((p=> p.code == code));
        if(productExist) 
            return `El código ${code} ya se encuentra registrado, el producto no se registró`;
        //id que se incremente 
        ProductManager.idProduct=ProductManager.idProduct+1;
        const id = ProductManager.idProduct;
            const newProduct = {
                id: id,
                title: title,
                description: descrption,        
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock,       
            };
            this.#products.push(newProduct);
            return `Producto ${code} se agregó exitosamente`
    }       
    getProducts(){
        //devuelve los productos
        return this.#products;
    }
    getProductsById(id){
        //devuelve el producto que coincide con el id
        const  product = this.#products.find((p)=> p.id===id);
        if(product)
            return product
        else
            return `No se encuentra producto con id: $(id)`
    } 
}
module.exports =  ProductManager;