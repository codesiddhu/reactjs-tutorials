import {createContext} from "react"
export let Productcontext = createContext()
const ProductContext = ({childern}) => {
    let products = [
    {
      id: 1,
      productName: "Shirt",
      price: 200,
      category: "men",
    },
    {
      id: 2,
      productName: "T-Shirt",
      price: 200,
      category: "men",
    },
    {
      id: 3,
      productName: "Kurthi",
      price: 200,
      category: "women",
    },
    {
      id: 4,
      productName: "Women Shirt",
      price: 200,
      category: "women",
    },
    {
      id: 5,
      productName: "Kids T-shirt",
      price: 200,
      category: "kids",
    },
    {
      id: 6,
      productName: "Kids Jeans",
      price: 200,
      category: "kids",
    },
  ];
  return (
    <ProductContext.Provider value={{ products }}>
          {childern}
    </ProductContext.Provider>
    
  )
}

export default ProductContext