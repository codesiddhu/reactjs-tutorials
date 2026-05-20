import {createContext} from "react";
export let ProductContext = createContext();

const ProductProvider = ({children})=>{
    let products = [
        {
            id: 1,
            name: "wrogon",
            category: "Men",
            cloth: "t-shirt",
            price: 200
        },
        {
            id: 2,
            name: "wrogon",
            category: "Men",
            cloth: "jeans",
            price: 500
        },
        {
            id: 3,
            name:"lily",
            category:"Women",
            cloth:"Bra",
            price:150
        },
        {
          id :4,
          name:"lily",
          category:"Women",
          cloth:"Saree",
          price:2000
         },
         {
            id:6,
            name:"childrens",
            category:"Kids",
            cloth:"inner",
            price:100
         }
        
    ]
    return(
        <ProductContext.Provider value ={products}>  
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;