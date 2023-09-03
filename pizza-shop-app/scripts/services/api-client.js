//network call 
//return object that is promise type after fetching and is called by product-operation

import  URL  from "../utils/config.js";

async function doNetworkCall() {
   try{
   const response=await fetch("../../pizza.json");
   console.log("response is",response);
   const object= await response.json();
   return object; //return promise
   }catch(error){
    console.log("error in api calling or parsing",error);
    throw error; //caller will handle the error
   }
   
    // const promise = fetch(URL);  //assign to thread
    // console.log("promise is", promise);
    // promise.then(function (response) {
    //     console.log(response);
    //     const promise2= response.json();   //JSON to object (JSON.parse(json)) deserialization
    //     promise2.then(data=>console.log("data is",data)).catch(error=>console.log("parsing error",error));
    // }).catch(function (err) {
    //     console.log("error", err);
    // });
    // console.log("good bye");
}
export default doNetworkCall;