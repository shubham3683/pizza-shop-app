// perform crud operation and calling different operations

import doNetworkCall from "./api-client.js";
import Product from "../models/product.js";

const productOperation={                              //object(productOperation) made due to many operations on pizza
    products:[],  //     key value pair

    search(pizzaId){
    const productInfo=this.products.find(e=>e.id==pizzaId);
    console.log("product found",productInfo);
    productInfo.isAddedInCart=true;
    },

    getBasket(){
    const pizzaArr= this.products.filter(pizza=>pizza.isAddedInCart);
    return pizzaArr;
    },

   async  loadProducts(){
    const pizzas=await doNetworkCall();
    const pizzaArray=pizzas["Vegetarian"];
    const productArray= pizzaArray.map(pizza=>{
        const currentPizza=new Product(pizza.id,pizza.name,pizza.menu_description
        ,pizza.price,pizza.assets.product_details_page[0].url );
        return currentPizza;
     });
     console.log("product Array",productArray);
     this.products=productArray;
     return productArray;  //return promise
    },
    sortProducts(){

    },
    searchProducts(){

    }
}
export default productOperation;