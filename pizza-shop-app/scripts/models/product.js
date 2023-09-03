//structure for products
//converting from generic type (Object type) into my type that is pizzas and is called by product -operation

class Product{
    constructor(id,name,desc,price,url){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.url=url;
        this.isAddedInCart=false;
    }
}
export default Product;